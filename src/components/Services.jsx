import { Megaphone, BarChart3, LineChart, Palette, Sparkles, Workflow } from 'lucide-react'

const services = [
  { icon: Megaphone, title: 'Campaign Strategy', desc: 'Full-funnel plans that blend brand and performance for compounding growth.' },
  { icon: BarChart3, title: 'Paid Media', desc: 'Omni-channel ads across Meta, Google, TikTok and more with scientific rigor.' },
  { icon: LineChart, title: 'SEO & Content', desc: 'Technical SEO, editorial calendars and distribution that actually earns reach.' },
  { icon: Palette, title: 'Creative Production', desc: 'Playful brand systems, motion, UGC, and thumb-stopping ad concepts.' },
  { icon: Workflow, title: 'Lifecycle & CRM', desc: 'Email, SMS, and retention flows tuned to LTV and cohort health.' },
  { icon: Sparkles, title: 'Experiments', desc: 'Rapid A/B frameworks and weekly experimentation cadence.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_0%,rgba(34,197,94,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <p className="mt-3 text-slate-300">Everything you need to go from idea to scale.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 flex items-center justify-center shadow">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
