import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glowX = useTransform(x, [-300, 300], ['-10%', '10%']);
  const glowY = useTransform(y, [-300, 300], ['-10%', '10%']);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const relX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
    const relY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    x.set(relX * 300);
    y.set(relY * 300);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-[100vh] w-full overflow-hidden flex items-center"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 70% 30%, rgba(147, 51, 234, 0.25) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)',
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute w-[60vmin] h-[60vmin] rounded-full blur-[80px]"
        style={{
          left: glowX,
          top: glowY,
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(168,85,247,0.6), rgba(59,130,246,0.6), rgba(14,165,233,0.5), rgba(168,85,247,0.6))',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_20px_4px_rgba(168,85,247,0.7)]" />
            <p className="text-xs text-white/70">Drova Labs • AI-Powered Creative Agency</p>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
              Transform Your Ads with AI
            </span>
            <span className="block text-white mt-2">— Get Stunning UGC Creatives at Just ₹2499</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
            We craft high-converting, on-brand AI UGC ads tailored to your niche. Lightning fast, premium quality, and optimized to scale your ROAS.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-base font-semibold shadow-[0_10px_30px_-10px_rgba(59,130,246,0.8)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/60"
            >
              <span className="relative">
                <span className="absolute inset-0 rounded-full blur-xl bg-white/20 pointer-events-none" />
                <Rocket className="relative size-5" />
              </span>
              <span>Get Your Ad Now</span>
            </a>

            <span className="text-sm text-white/60">Delivery in 48–72 hours • Unlimited revisions on copy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
