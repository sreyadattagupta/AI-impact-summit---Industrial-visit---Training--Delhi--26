import Link from 'next/link';
import { Train, UtensilsCrossed } from 'lucide-react';

export default function Nav() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/40">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
                        <UtensilsCrossed className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Rail<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Bites</span>
                    </span>
                </Link>
                <div className="flex items-center gap-8">
                    <Link href="/order" className="text-sm font-semibold text-zinc-400 transition-colors hover:text-white relative group">
                        Menu
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/tracker" className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 active:scale-95">
                        <Train className="h-4 w-4" />
                        Track Order
                    </Link>
                </div>
            </div>
        </nav>
    );
}
