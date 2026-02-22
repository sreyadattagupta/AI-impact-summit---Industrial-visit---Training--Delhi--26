import { NextRequest, NextResponse } from 'next/server';
import { MOCK_PNR_DB } from '@/lib/mockDb';

export async function GET(req: NextRequest) {
    const pnr = req.nextUrl.searchParams.get('pnr')?.toUpperCase();
    if (!pnr) return NextResponse.json({ success: false, error: 'PNR required' }, { status: 400 });

    const data = MOCK_PNR_DB[pnr];
    if (!data) return NextResponse.json({ success: false, error: 'PNR not found. Try: PNR1234567890' }, { status: 404 });

    return NextResponse.json({ success: true, data });
}
