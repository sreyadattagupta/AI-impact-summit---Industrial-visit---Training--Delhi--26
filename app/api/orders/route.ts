import { NextRequest, NextResponse } from 'next/server';
import { getOrders, getOrderById, addOrder, updateOrder, FOOD_STOP_STATION } from '@/lib/mockDb';
import { lockFunds, generateOTP } from '@/lib/mockEscrow';
import { Order, CartItem } from '@/lib/types';

export async function GET(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id');
    if (id) {
        const order = getOrderById(id);
        if (!order) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
        return NextResponse.json({ success: true, data: order });
    }
    return NextResponse.json({ success: true, data: getOrders() });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { pnr, passengerName, trainNumber, trainName, boardingStation, coach, seat, items } = body;

        if (!pnr || !items?.length) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const cartItems: CartItem[] = items;
        const totalAmount = cartItems.reduce((sum, ci) => sum + ci.food.price * ci.quantity, 0);

        const orderId = `ORD_${Date.now()}_${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
        const otp = generateOTP();

        const order: Order = {
            id: orderId,
            pnr,
            passengerName,
            trainNumber,
            trainName,
            boardingStation,
            stopStation: FOOD_STOP_STATION.name,
            coach,
            seat,
            items: cartItems,
            totalAmount,
            escrowAmount: totalAmount,
            status: 'PLACED',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            otp,
            otpVerified: false,
            vendorId: 'v001',
            vendorNotified: false,
            prepStartedAt: null,
            deliveredAt: null,
            rating: null,
            review: null,
            holdReason: null,
        };

        addOrder(order);
        lockFunds(orderId, totalAmount);

        return NextResponse.json({ success: true, data: order }, { status: 201 });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to place order' }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json();
        const { id, ...updates } = body;
        if (!id) return NextResponse.json({ success: false, error: 'Order ID required' }, { status: 400 });
        const updated = updateOrder(id, updates);
        if (!updated) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
        return NextResponse.json({ success: true, data: updated });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to update order' }, { status: 500 });
    }
}
