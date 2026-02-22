import { NextRequest, NextResponse } from 'next/server';
import { getOrderById, updateOrder } from '@/lib/mockDb';
import { releaseFunds } from '@/lib/mockEscrow';
import { getEscrowStatus } from '@/lib/mockEscrow';

export async function POST(req: NextRequest) {
    try {
        const { orderId, otp } = await req.json();
        if (!orderId || !otp) {
            return NextResponse.json({ success: false, error: 'orderId and otp required' }, { status: 400 });
        }

        const order = getOrderById(orderId);
        if (!order) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
        if (order.otpVerified) return NextResponse.json({ success: false, error: 'OTP already used' }, { status: 400 });

        const result = releaseFunds(orderId, order.otp ?? '', otp);
        if (!result.success) {
            return NextResponse.json({ success: false, error: result.message }, { status: 400 });
        }

        updateOrder(orderId, {
            otpVerified: true,
            status: 'DELIVERED',
            deliveredAt: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            message: result.message,
            escrow: result.escrow,
            order: getOrderById(orderId),
        });
    } catch {
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const orderId = req.nextUrl.searchParams.get('orderId');
    if (!orderId) return NextResponse.json({ success: false, error: 'orderId required' }, { status: 400 });
    const escrow = getEscrowStatus(orderId);
    return NextResponse.json({ success: true, data: escrow });
}
