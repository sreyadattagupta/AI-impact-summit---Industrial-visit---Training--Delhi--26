import { NextRequest, NextResponse } from 'next/server';
import { getOrders } from '@/lib/mockDb';

export async function GET(_req: NextRequest) {
    const orders = getOrders();
    return NextResponse.json({ success: true, data: orders });
}
