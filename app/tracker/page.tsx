"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { TrainStatus, Vendor, DeliveryAgent, Station } from "@/lib/types";
import { Train, Clock, MapPin, ChefHat, CheckCircle2, AlertCircle, ShieldCheck, Lock } from "lucide-react";
import { MOCK_VENDORS, MOCK_AGENTS, FOOD_STOP_STATION } from "@/lib/mockDb";

const DeliveryMap = dynamic(() => import("@/app/components/DeliveryMap"), {
    ssr: false,
    loading: () => (
        <div className="h-full w-full bg-zinc-900/50 animate-pulse flex items-center justify-center rounded-2xl border border-white/5">
            <MapPin className="h-8 w-8 text-zinc-600 animate-bounce" />
        </div>
    )
});

// Using a custom OTP string for demo purposes
const DEMO_OTP = "123456";

export default function TrackerPage() {
    const [status, setStatus] = useState<TrainStatus | null>(null);
    const [prepStatus, setPrepStatus] = useState<"WAITING" | "PREPARING" | "OUT_FOR_DELIVERY" | "DELIVERED">("WAITING");
    const [agent, setAgent] = useState<DeliveryAgent | null>(null);

    const [otpInput, setOtpInput] = useState("");
    const [escrowStatus, setEscrowStatus] = useState<"LOCKED" | "RELEASED">("LOCKED");

    useEffect(() => {
        // Poll train status
        const fetchStatus = async () => {
            try {
                const res = await fetch('/api/train');
                const data = await res.json();
                if (data.success) {
                    const currentStatus = data.data as TrainStatus;
                    setStatus(currentStatus);

                    // Dynamic Prep Logic (Hold/Pivot)
                    if (currentStatus.distanceToStop < 50 && prepStatus === "WAITING") {
                        setPrepStatus("PREPARING");
                    } else if (currentStatus.distanceToStop < 10 && prepStatus === "PREPARING") {
                        setPrepStatus("OUT_FOR_DELIVERY");
                        setAgent(MOCK_AGENTS[0]); // Assign agent
                    }
                }
            } catch (e) {
                console.error("Failed to fetch train status", e);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 3000); // Poll every 3 seconds for demo speed
        return () => clearInterval(interval);
    }, [prepStatus]);

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (otpInput === DEMO_OTP) {
            setEscrowStatus("RELEASED");
            setPrepStatus("DELIVERED");
        } else {
            alert("Invalid OTP");
        }
    };

    if (!status) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    const vendor: Vendor = MOCK_VENDORS[0]; // Bhopal Station Kitchen
    const stopStation: Station = FOOD_STOP_STATION;

    return (
        <div className="min-h-screen pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">

            <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            Order Tracker
                            <span className="text-sm font-medium bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">PNR: 1234567890</span>
                        </h1>
                        <p className="text-zinc-400 mt-2">Train {status.trainNumber} - {status.trainName}</p>
                    </div>
                    <div className="flex bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 items-center gap-4">
                        <Lock className="h-8 w-8 text-orange-400" />
                        <div>
                            <p className="text-sm font-medium text-orange-400">Escrow Protected</p>
                            <p className="text-xs text-orange-200">Funds locked until delivery</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Live Status */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Train Live Status */}
                    <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="absolute top-0 right-0 p-4">
                            {status.delayMinutes > 0 ? (
                                <span className="flex items-center gap-1.5 text-red-400 text-xs font-bold bg-red-400/10 px-3 py-1.5 rounded-full border border-red-500/20">
                                    <AlertCircle className="h-3.5 w-3.5" /> DELAYED {status.delayMinutes}M
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5 text-green-400 text-xs font-bold bg-green-400/10 px-3 py-1.5 rounded-full border border-green-500/20">
                                    <CheckCircle2 className="h-3.5 w-3.5" /> ON TIME
                                </span>
                            )}
                        </div>

                        <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <Train className="h-4 w-4 text-zinc-400" />
                            </div>
                            Train Location
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Current Station</p>
                                <p className="font-bold text-2xl text-white tracking-tight">{status.currentStation}</p>
                            </div>
                            <div className="flex gap-4 p-4 bg-black/40 rounded-2xl border border-white/5">
                                <div className="flex-1 border-r border-white/5">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Speed</p>
                                    <p className="font-bold text-xl text-white">{status.speed} <span className="text-sm font-medium text-zinc-500">km/h</span></p>
                                </div>
                                <div className="flex-1 pl-4">
                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Distance to {stopStation.name}</p>
                                    <p className="font-bold text-xl text-orange-400">{status.distanceToStop.toFixed(1)} <span className="text-sm font-medium text-orange-500/50">km</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dynamic Prep Status */}
                    <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-zinc-900">
                            <div
                                className="h-full bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-1000 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                                style={{ width: prepStatus === 'WAITING' ? '25%' : prepStatus === 'PREPARING' ? '50%' : prepStatus === 'OUT_FOR_DELIVERY' ? '75%' : '100%' }}
                            />
                        </div>

                        <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                                <ChefHat className="h-4 w-4 text-zinc-400" />
                            </div>
                            Order Status
                        </h2>

                        <div className="space-y-8 pb-4">
                            <div className={`flex gap-5 relative ${prepStatus === 'WAITING' ? 'opacity-100' : 'opacity-40'}`}>
                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border relative z-10 ${prepStatus === 'WAITING' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-zinc-900 text-zinc-500 border-white/10'}`}>1</div>
                                <div className="absolute top-10 left-5 w-px h-12 bg-white/10 -z-0"></div>
                                <div className="pt-1">
                                    <p className="font-bold text-white text-lg tracking-tight">Order Placed & Held</p>
                                    <p className="text-sm text-zinc-400 mt-1">Waiting for train to approach {stopStation.name}.</p>
                                </div>
                            </div>

                            <div className={`flex gap-5 relative ${prepStatus === 'PREPARING' ? 'opacity-100' : prepStatus === 'WAITING' ? 'opacity-20' : 'opacity-40'}`}>
                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border relative z-10 ${prepStatus === 'PREPARING' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse' : 'bg-zinc-900 text-zinc-500 border-white/10'}`}>2</div>
                                <div className="absolute top-10 left-5 w-px h-12 bg-white/10 -z-0"></div>
                                <div className="pt-1">
                                    <p className="font-bold text-white text-lg tracking-tight">Kitchen Preparing</p>
                                    <p className="text-sm text-zinc-400 mt-1">Train is <span className="text-amber-400 font-semibold px-1 bg-amber-400/10 rounded">{status.distanceToStop.toFixed(0)}km</span> away. Cooking started!</p>
                                </div>
                            </div>

                            <div className={`flex gap-5 ${prepStatus === 'OUT_FOR_DELIVERY' ? 'opacity-100' : prepStatus === 'DELIVERED' ? 'opacity-40' : 'opacity-20'}`}>
                                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border relative z-10 ${prepStatus === 'OUT_FOR_DELIVERY' ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-zinc-900 text-zinc-500 border-white/10'}`}>3</div>
                                <div className="pt-1">
                                    <p className="font-bold text-white text-lg tracking-tight">Agent at Platform</p>
                                    <p className="text-sm text-zinc-400 mt-1">Agent {agent?.name} is waiting at the platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secure Escrow & OTP */}
                    {prepStatus === "OUT_FOR_DELIVERY" && escrowStatus === "LOCKED" && (
                        <div className="bg-gradient-to-br from-zinc-950 to-orange-950/40 border border-orange-500/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(249,115,22,0.1)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

                            <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 flex items-center gap-2 mb-3">
                                <ShieldCheck className="h-5 w-5 text-orange-400" /> Delivery Verification
                            </h2>
                            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Share this secure OTP with your delivery agent to release funds directly to the kitchen. <br /><span className="inline-block mt-2 text-xs font-semibold text-orange-400/80 bg-orange-500/10 px-2 py-1 rounded">(Demo: Enter {DEMO_OTP})</span></p>

                            <div className="bg-black/60 p-6 rounded-2xl border border-white/5 mb-8 text-center shadow-inner relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent rounded-2xl"></div>
                                <p className="text-xs font-semibold text-zinc-500 tracking-[0.2em] mb-3 relative z-10">YOUR SECRET OTP</p>
                                <p className="text-5xl font-mono font-bold tracking-[0.25em] text-white relative z-10 ml-3">123<span className="text-orange-500">456</span></p>
                            </div>

                            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-3 relative z-10">
                                <input
                                    type="text"
                                    value={otpInput}
                                    onChange={e => setOtpInput(e.target.value)}
                                    placeholder="Enter OTP to verify..."
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white text-center text-lg tracking-[0.2em] focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none placeholder:text-zinc-600 placeholder:tracking-normal placeholder:text-sm"
                                />
                                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-[0.98]">
                                    Verify Delivery
                                </button>
                            </form>
                        </div>
                    )}

                    {escrowStatus === "RELEASED" && (
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-900/20 border border-green-500/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_40px_rgba(34,197,94,0.1)] transition-all animate-in zoom-in-95 duration-500">
                            <div className="h-20 w-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 rotate-3">
                                <CheckCircle2 className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Delivered & Paid</h2>
                            <p className="text-zinc-400 mt-2">Funds have been securely released from escrow to the vendor. Enjoy your premium meal!</p>
                        </div>
                    )}
                </div>

                {/* Right Column - Map */}
                <div className="lg:col-span-2 h-[600px] lg:h-auto min-h-[600px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl relative">
                    <Suspense fallback={<div className="h-full w-full bg-zinc-900 flex items-center justify-center">Loading Map...</div>}>
                        <DeliveryMap
                            agent={agent}
                            vendor={vendor}
                            trainLat={status.currentLat}
                            trainLng={status.currentLng}
                            station={stopStation}
                        />
                    </Suspense>

                    {/* Map Overlay Info */}
                    <div className="absolute top-4 left-4 z-[400] bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl max-w-xs">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-orange-500" /> Live Area View
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">
                            Watch the train approach {stopStation.name}. Agent marker appears when train is nearby.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
