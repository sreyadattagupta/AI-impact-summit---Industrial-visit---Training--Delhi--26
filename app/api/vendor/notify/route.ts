import { NextRequest, NextResponse } from 'next/server';
import { getOrderById, updateOrder, addNotification } from '@/lib/mockDb';
import { PREP_TRIGGER_DISTANCE_KM, HOLD_DELAY_THRESHOLD_MIN } from '@/lib/mockNTES';
import { getTrainStatus } from '@/lib/mockDb';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { orderId, action } = body; // action: 'notify' | 'start_prep' | 'check_hold'

        const order = getOrderById(orderId);
        if (!order) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });

        const trainStatus = getTrainStatus();

        if (action === 'notify') {
            // Send notification to vendor to get ready
            updateOrder(orderId, { vendorNotified: true, status: 'CONFIRMED' });
            addNotification({
                type: 'ORDER_PLACED',
                message: `New order ${orderId} placed! Train ${trainStatus.trainNumber} is ${Math.round(trainStatus.distanceToStop)} km away. Get ready!`,
                orderId,
            });
            return NextResponse.json({ success: true, message: 'Vendor notified of new order.' });
        }

        if (action === 'start_prep') {
            // Trigger preparation start
            if (trainStatus.distanceToStop > PREP_TRIGGER_DISTANCE_KM) {
                return NextResponse.json({
                    success: false,
                    message: `Train is still ${Math.round(trainStatus.distanceToStop)} km away. Prep triggers at ${PREP_TRIGGER_DISTANCE_KM} km.`,
                });
            }
            updateOrder(orderId, { status: 'PREPARING', prepStartedAt: new Date().toISOString() });
            addNotification({
                type: 'PREP_START',
                message: `🔥 START PREPARATION NOW! Train is ${Math.round(trainStatus.distanceToStop)} km from Bhopal Junction.`,
                orderId,
            });
            return NextResponse.json({ success: true, message: 'Preparation started!' });
        }

        if (action === 'check_hold') {
            // Hold/Pivot logic
            if (trainStatus.delayMinutes >= HOLD_DELAY_THRESHOLD_MIN) {
                const holdMsg = `⚠️ HOLD: Train delayed by ${trainStatus.delayMinutes} min. Pause preparation. New ETA: ${new Date(trainStatus.eta).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;
                updateOrder(orderId, { status: 'ON_HOLD', holdReason: holdMsg });
                addNotification({ type: 'HOLD', message: holdMsg, orderId });
                return NextResponse.json({ success: true, message: holdMsg, action: 'HOLD' });
            } else if (order.status === 'ON_HOLD') {
                updateOrder(orderId, { status: 'PREPARING', holdReason: null });
                addNotification({ type: 'RESUME', message: '✅ RESUME preparation. Train is back on track.', orderId });
                return NextResponse.json({ success: true, message: 'Preparation resumed.', action: 'RESUME' });
            }
            return NextResponse.json({ success: true, message: 'No hold needed.', action: 'OK' });
        }

        return NextResponse.json({ success: false, error: 'Unknown action' }, { status: 400 });
    } catch {
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export async function GET(_req: NextRequest) {
    const { getNotifications } = await import('@/lib/mockDb');
    return NextResponse.json({ success: true, data: getNotifications() });
}
