import { NextRequest, NextResponse } from 'next/server';
import { simulateTrainMovement } from '@/lib/mockNTES';

export async function GET(_req: NextRequest) {
    const status = simulateTrainMovement();
    return NextResponse.json({ success: true, data: status });
}
