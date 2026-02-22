import { NextRequest, NextResponse } from 'next/server';
import { getAgents, updateAgent } from '@/lib/mockDb';

export async function GET(_req: NextRequest) {
    return NextResponse.json({ success: true, data: getAgents() });
}

export async function PATCH(req: NextRequest) {
    const { id, ...updates } = await req.json();
    updateAgent(id, updates);
    return NextResponse.json({ success: true, data: getAgents().find(a => a.id === id) });
}
