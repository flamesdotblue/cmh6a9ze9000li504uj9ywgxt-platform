import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-transparent to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-semibold"
        >
          See the Magic in Action ✨
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_30%_10%,rgba(168,85,247,0.12),transparent_60%)]" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold">AI UGC Ad Mockup</h3>
                <p className="mt-3 text-white/70">
                  A sleek, scroll-stopping creative: dynamic captions, product highlights, and authentic UGC tone tuned for conversions.
                </p>
                <ul className="mt-6 space-y-2 text-white/80 text-sm">
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400"/>Hook-first intro with kinetic text</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-400"/>Benefit bullets with animated accents</li>
                  <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"/>Strong CTA & social-proof cues</li>
                </ul>
              </div>

              <div className="relative p-6 md:p-10">
                <DeviceMock />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DeviceMock() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 blur-2xl rounded-3xl" />
      <div className="relative rounded-[2rem] border border-white/20 bg-black/60 backdrop-blur-xl overflow-hidden shadow-[0_20px_90px_-20px_rgba(59,130,246,0.5)]">
        <div className="relative h-[520px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/60 rounded-b-2xl z-10" />

          <div className="absolute inset-0 p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse" />
              <div>
                <div className="h-2.5 w-28 bg-white/20 rounded" />
                <div className="mt-2 h-2 w-20 bg-white/10 rounded" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <KineticLine w="90%"/>
              <KineticLine w="80%" color="bg-blue-400/50"/>
              <KineticLine w="85%" color="bg-purple-400/50"/>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Card />
              <Card delay={0.1} />
              <Card delay={0.2} />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div className="h-10 px-4 rounded-full bg-white/10 backdrop-blur flex items-center gap-2 text-white/80 text-xs">
                <PlayCircle className="size-4 text-white/70" />
                <span>Preview • 15s UGC</span>
              </div>
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-xs font-semibold shadow-[0_10px_30px_-12px_rgba(168,85,247,0.8)]">
                Re-generate
              </button>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_80%_at_100%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
        </div>
      </div>
    </div>
  );
}

function KineticLine({ w = '100%', color = 'bg-white/30' }) {
  return (
    <div className={`relative h-9 rounded-lg overflow-hidden ${color} bg-white/10`} style={{ width: w }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2.2s_infinite]" />
      <style>{`@keyframes shimmer { 0%{transform:translateX(-100%)} 50%{transform:translateX(0%)} 100%{transform:translateX(100%)} }`}</style>
      <div className="absolute inset-0 flex items-center justify-between px-3 text-[11px] text-white/80">
        <span>Hook: Stop scrolling!</span>
        <span>0:03</span>
      </div>
    </div>
  );
}

function Card({ delay = 0 }) {
  return (
    <div
      className="relative h-24 rounded-xl bg-white/5 border border-white/10 overflow-hidden"
      style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
    >
      <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }`}</style>
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_10%_0%,rgba(168,85,247,0.2),transparent_60%)]" />
      <div className="absolute top-2 left-2 h-2 w-16 rounded bg-white/20" />
      <div className="absolute bottom-2 left-2 right-2 h-1.5 rounded bg-white/10" />
    </div>
  );
}
