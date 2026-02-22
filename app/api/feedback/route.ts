import { NextRequest, NextResponse } from 'next/server';
import { getOrderById, updateOrder } from '@/lib/mockDb';

export async function POST(req: NextRequest) {
    try {
        const { orderId, rating, review } = await req.json();
        if (!orderId || !rating) {
            return NextResponse.json({ success: false, error: 'orderId and rating required' }, { status: 400 });
        }
        const order = getOrderById(orderId);
        if (!order) return NextResponse.json({ success: false, error: 'Order not found' }, { status: 404 });
        if (!order.otpVerified) {
            return NextResponse.json({ success: false, error: 'Cannot review before delivery confirmed' }, { status: 403 });
        }
        const updated = updateOrder(orderId, { rating, review: review ?? '' });
        return NextResponse.json({ success: true, data: updated });
    } catch {
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
