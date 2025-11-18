import { motion } from 'framer-motion'

const cases = [
  {
    brand: 'Lumina Skincare',
    result: '+214% ROAS',
    summary: 'UGC-led creative and TikTok Spark Ads to unlock profitable scale.',
  },
  {
    brand: 'Volt Mobility',
    result: '3.1x CAC efficiency',
    summary: 'Paid search restructure + creative refresh reduced CAC and boosted trials.',
  },
  {
    brand: 'Nova Apps',
    result: '2M organic views',
    summary: 'SEO + content hub drove compounding non-paid acquisition.',
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_90%_10%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Case studies</h2>
            <p className="mt-3 text-slate-300">Selected outcomes from recent partnerships.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/10 text-white px-5 py-3 hover:bg-white/10 transition">Work with us</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-6">
                <div className="text-emerald-300 text-sm font-semibold">{c.result}</div>
                <h3 className="mt-1 text-white text-lg font-semibold">{c.brand}</h3>
                <p className="mt-2 text-slate-300 text-sm">{c.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
