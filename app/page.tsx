"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, ShieldCheck, Train } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [pnr, setPnr] = useState("");
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr) {
      router.push(`/tracker?pnr=${pnr}`);
    }
  };

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500 to-amber-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-500/20">What's new</span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-300">
                <span>AI-Powered Recommendations</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Premium dining,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">delivered to your seat</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Never settle for pantry food again. Order hot, fresh meals from premium station vendors. We track your train live to ensure food is prepared exactly when you arrive.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={() => router.push('/order')}
              className="rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all hover:scale-105 active:scale-95"
            >
              Order Now
            </button>
            <form onSubmit={handleTrack} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter PNR..."
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                className="rounded-full bg-zinc-900 border border-zinc-800 px-6 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <button
                type="submit"
                className="rounded-full bg-zinc-800 px-6 py-3.5 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors flex items-center gap-2"
              >
                Track
                <Train className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-2xl bg-zinc-900/50 p-2 ring-1 ring-white/10 backdrop-blur-3xl shadow-2xl">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-6 w-[400px]">
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-6 flex items-start gap-4 hover:border-orange-500/30 transition-colors">
                    <MapPin className="h-6 w-6 text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Live Map Tracking</h3>
                      <p className="text-zinc-400 text-sm mt-1">Watch your delivery agent arrive at your platform in real-time.</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-6 flex items-start gap-4 hover:border-orange-500/30 transition-colors">
                    <Clock className="h-6 w-6 text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Dynamic Prep</h3>
                      <p className="text-zinc-400 text-sm mt-1">Kitchen starts cooking based on your train's GPS coordinates.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-6 flex items-start gap-4 hover:border-orange-500/30 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-orange-400 mt-1" />
                    <div>
                      <h3 className="text-white font-medium">Secure Escrow</h3>
                      <p className="text-zinc-400 text-sm mt-1">Funds only released to vendor after you share the OTP upon delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
