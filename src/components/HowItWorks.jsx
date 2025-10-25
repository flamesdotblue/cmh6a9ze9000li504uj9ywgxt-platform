import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Brief in Minutes',
    desc: 'Tell us your niche, offer, and brand vibe. We handle angles, hooks, and scripts.',
  },
  {
    icon: Wand2,
    title: 'AI-Crafted UGC',
    desc: 'We generate authentic UGC-style visuals, captions, and motion that sell.',
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    desc: 'Get export-ready ads in 48–72 hours. Plug into Meta, TikTok, or YouTube.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-semibold"
        >
          How It Works
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur group overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-purple-600/15 opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_10px_30px_-12px_rgba(59,130,246,0.8)]">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
