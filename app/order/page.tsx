"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Utensils, Star, Info, ChevronRight, ShoppingBag, MapPin } from "lucide-react";
import { MOCK_FOOD_ITEMS, MOCK_PNR_DB, getTrainStatus } from "@/lib/mockDb";
import { getAIRecommendations } from "@/lib/aiRecommendations";
import { FoodItem } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function OrderPage() {
    const [recommendations, setRecommendations] = useState<FoodItem[]>([]);
    const [cart, setCart] = useState<{ item: FoodItem, quantity: number }[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Generate AI recommendations based on mock context
        const recs = getAIRecommendations({
            pnrData: MOCK_PNR_DB['PNR1234567890'],
            currentHour: new Date().getHours(),
            journeyDurationHours: 10
        });
        setRecommendations(recs.items);
    }, []);

    const addToCart = (item: FoodItem) => {
        setCart(prev => {
            const existing = prev.find(p => p.item.id === item.id);
            if (existing) {
                return prev.map(p => p.item.id === item.id ? { ...p, quantity: p.quantity + 1 } : p);
            }
            return [...prev, { item, quantity: 1 }];
        });
    };

    const total = cart.reduce((sum, c) => sum + (c.item.price * c.quantity), 0);

    const handleCheckout = () => {
        // In a real app we'd create the order here and get an ID,
        // For mock, we'll just redirect to the tracker with a mock PNR.
        router.push('/tracker?pnr=PNR1234567890&order=new');
    };

    return (
        <div className="min-h-screen pb-24">
            {/* Header */}
            <div className="bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 pt-8 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
                    <div>
                        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 tracking-tight">Food Menu</h1>
                        <p className="text-zinc-400 mt-2 flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-orange-500" /> Delivered at upcoming station: <span className="text-white font-medium bg-white/5 px-2 py-0.5 rounded-md border border-white/10">Bhopal Junction</span>
                        </p>
                    </div>
                    <div className="flex bg-gradient-to-r from-orange-500/10 to-amber-500/5 p-4 rounded-2xl border border-orange-500/20 items-center gap-4 shadow-lg shadow-orange-500/5">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-inner">
                            <Sparkles className="h-6 w-6" />
                        </span>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-orange-400 mb-1">AI Engine Active</p>
                            <p className="font-medium text-white text-sm">Personalized for your journey</p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-12">
                    {/* AI Recommendations */}
                    <section>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 flex items-center gap-2 mb-6">
                            <Sparkles className="h-6 w-6 text-orange-400" />
                            Recommended for you
                        </h2>
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {recommendations.map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    key={item.id}
                                    className="group bg-zinc-950/50 backdrop-blur-md border border-orange-500/30 rounded-3xl p-6 hover:border-orange-500 transition-all flex flex-col shadow-lg shadow-orange-500/5 hover:shadow-orange-500/20 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/20 to-transparent blur-2xl rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                                    <div className="flex justify-between items-start mb-5 relative z-10">
                                        <span className="text-5xl drop-shadow-lg">{item.image}</span>
                                        <span className="bg-orange-500/10 border border-orange-500/20 text-xs px-3 py-1.5 rounded-full text-orange-300 font-semibold tracking-wide">{item.category}</span>
                                    </div>
                                    <h3 className="font-bold text-xl text-white mb-2 relative z-10">{item.name}</h3>
                                    <p className="text-sm text-zinc-400 line-clamp-2 mb-6 flex-1 relative z-10">{item.description}</p>

                                    <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10 relative z-10">
                                        <span className="text-2xl font-bold text-white">₹{item.price}</span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-orange-500 hover:bg-orange-400 text-white p-3 rounded-2xl transition-all shadow-lg hover:shadow-orange-500/30 active:scale-95"
                                        >
                                            <Utensils className="h-5 w-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* All Items */}
                    <section className="pt-8">
                        <h2 className="text-2xl font-bold text-white mb-6">All Menu Items</h2>
                        <div className="grid gap-4">
                            {MOCK_FOOD_ITEMS.map((item) => (
                                <div key={item.id} className="group bg-zinc-950/40 backdrop-blur-sm border border-white/5 rounded-3xl p-5 flex flex-col sm:flex-row gap-5 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
                                    <div className="h-28 w-28 bg-zinc-900 rounded-2xl flex items-center justify-center text-5xl shrink-0 shadow-inner group-hover:bg-zinc-800 transition-colors">
                                        {item.image}
                                    </div>
                                    <div className="flex-1 py-1 flex flex-col justify-center">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-white text-xl flex items-center gap-3">
                                                    {item.name}
                                                    <div className={`h-2.5 w-2.5 rounded-full ring-2 ring-offset-2 ring-offset-zinc-950 ${item.isVeg ? 'bg-green-500 ring-green-500/30' : 'bg-red-500 ring-red-500/30'}`} />
                                                </h3>
                                                <p className="text-sm text-zinc-400 mt-1.5 line-clamp-2 max-w-xl">{item.description}</p>
                                            </div>
                                            <div className="flex items-center text-sm font-bold text-amber-400 gap-1.5 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
                                                <Star className="h-4 w-4 fill-amber-400" /> {item.rating}
                                            </div>
                                        </div>
                                        <div className="mt-4 flex justify-between items-center pt-4 border-t border-white/5">
                                            <span className="font-bold text-xl text-white">₹{item.price}</span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="text-sm font-bold text-zinc-900 bg-white hover:bg-zinc-200 px-6 py-2.5 rounded-full transition-all active:scale-95"
                                            >
                                                Add to Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Cart Sidebar */}
                <div className="lg:w-[400px] shrink-0">
                    <div className="sticky top-24 bg-zinc-950/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                            <ShoppingBag className="h-6 w-6 text-zinc-400" /> Your Order
                        </h2>

                        {cart.length === 0 ? (
                            <div className="text-center py-12 text-zinc-500 flex flex-col items-center">
                                <div className="h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 border border-white/5 shadow-inner">
                                    <Utensils className="h-8 w-8 opacity-50" />
                                </div>
                                <p className="font-medium text-zinc-400">Your cart is empty</p>
                                <p className="text-sm mt-1">Add items from the menu to start ordering</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                    {cart.map((c, i) => (
                                        <div key={i} className="flex justify-between items-center bg-black/40 border border-white/5 p-4 rounded-2xl">
                                            <div className="flex items-center gap-4">
                                                <span className="text-3xl drop-shadow-md">{c.item.image}</span>
                                                <div>
                                                    <p className="text-sm font-bold text-white">{c.item.name}</p>
                                                    <p className="text-xs font-medium text-zinc-500 mt-0.5">₹{c.item.price} x {c.quantity}</p>
                                                </div>
                                            </div>
                                            <span className="font-bold text-white text-lg flex-shrink-0">₹{c.item.price * c.quantity}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-black/30 p-5 rounded-2xl border border-white/5 mb-8 space-y-3">
                                    <div className="flex justify-between text-sm font-medium text-zinc-400">
                                        <span>Subtotal</span>
                                        <span className="text-zinc-300">₹{total}</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium text-zinc-400">
                                        <span>Delivery Fee</span>
                                        <span className="text-zinc-300">₹40</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-white pt-3 mt-3 border-t border-white/10">
                                        <span>Total</span>
                                        <span className="text-orange-400">₹{total + 40}</span>
                                    </div>
                                </div>

                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 mb-8 flex gap-3 text-sm">
                                    <Info className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                                    <p className="text-orange-200/80 leading-relaxed">
                                        Payment is held in secure <span className="font-bold text-orange-400">Escrow</span>. Funds are only released after successful delivery to your seat.
                                    </p>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-orange-500/20 transition-all hover:shadow-orange-500/40 active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
                                >
                                    Confirm & Track Order <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
