import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Star, CheckCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What do I get for ₹2499?',
    a: 'One AI-generated UGC ad creative (15–30s) with on-brand captions, motion graphics, and export in common aspect ratios (9:16/1:1).',
  },
  {
    q: 'How fast is delivery?',
    a: 'Most orders are delivered within 48–72 hours after receiving your brief and brand assets.',
  },
  {
    q: 'Can you match my brand style?',
    a: 'Yes. Provide your guidelines, fonts, color codes, and references. We tailor visuals and tone to match.',
  },
  {
    q: 'Do you offer revisions?',
    a: 'We include copy tweaks and light adjustments. For new variations, we offer discounted add-ons.',
  },
];

const testimonials = [
  {
    name: 'Aarav, D2C Founder',
    quote: 'Our CPA dropped 28% in week one. The hooks and pacing feel native to TikTok — exactly what we needed.',
  },
  {
    name: 'Isha, Growth Marketer',
    quote: 'Super quick turnaround and premium feel. We scaled winning variants across Meta with ease.',
  },
  {
    name: 'Kabir, App Marketer',
    quote: 'The AI UGC looked authentic yet on-brand. CTR up 41% versus our baseline creatives.',
  },
];

export default function PricingAndSocialProof() {
  const [open, setOpen] = useState(0);

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 -z-[0] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur overflow-hidden">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Shield className="size-6 text-purple-300" />
                  <h3 className="text-xl font-bold">Launch Offer</h3>
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">₹2499</span>
                  <span className="text-white/60 mb-2 text-sm">per AI UGC ad</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    '1 x 15–30s AI UGC ad creative',
                    'Captions + kinetic text + SFX',
                    'Brand-matched color and fonts',
                    'Export in 9:16, 1:1 (MP4)',
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="size-4 text-blue-300" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#checkout"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold shadow-[0_10px_30px_-10px_rgba(168,85,247,0.8)] hover:scale-[1.02] transition-transform"
                  >
                    Get Your Ad Now
                  </a>
                  <span className="text-xs text-white/60">No meetings. Pure output. Refund if not delivered.</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold">What clients say</h4>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center gap-1 text-yellow-300">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="size-3 fill-current" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-white/80">“{t.quote}”</p>
                      <p className="mt-2 text-xs text-white/60">{t.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">FAQ</h4>
                <div className="mt-3 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
                  {faqs.map((f, i) => (
                    <div key={f.q} className="p-4">
                      <button
                        onClick={() => setOpen(open === i ? -1 : i)}
                        className="w-full flex items-center justify-between text-left"
                        aria-expanded={open === i}
                      >
                        <span className="flex items-center gap-2 text-sm font-medium">
                          <HelpCircle className="size-4 text-purple-300" /> {f.q}
                        </span>
                        <span className={`transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm text-white/75">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="checkout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold">Let AI Speak for Your Brand</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Level up your performance creative with cinematic AI UGC ads. Premium feel, engineered for conversions.
          </p>
          <div className="mt-7">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-sm font-semibold shadow-[0_10px_40px_-12px_rgba(59,130,246,0.9)] hover:scale-[1.02] transition-transform"
            >
              Start for ₹2499
            </a>
          </div>
          <div className="mt-12 text-xs text-white/50">Built by AI. Loved by Brands.</div>
        </motion.div>
      </div>
    </section>
  );
}
