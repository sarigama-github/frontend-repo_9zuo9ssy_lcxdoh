import { useState } from 'react'

const initial = { name: '', email: '', company: '', services: [], budget: '', message: '' }

const serviceOptions = ['Paid Media', 'SEO & Content', 'Creative', 'Lifecycle & CRM', 'Strategy']
const budgetOptions = ['<$5k', '$5k–$10k', '$10k–$25k', '$25k–$50k', '$50k+']

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((i) => i !== s) : [...f.services, s],
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm(initial)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tell us about your project</h2>
          <p className="mt-3 text-slate-300">We read every note. Expect a reply within 24 hours.</p>
        </div>

        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Company</label>
              <input value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="block text-sm text-slate-300 mb-2">Services of interest</div>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((s) => (
                  <button type="button" key={s} onClick={()=>toggleService(s)} className={`rounded-full px-3 py-1.5 text-sm border ${form.services.includes(s) ? 'bg-cyan-400 text-slate-900 border-transparent' : 'border-white/10 text-white hover:bg-white/10'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="block text-sm text-slate-300 mb-2">Budget</div>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((b) => (
                  <button type="button" key={b} onClick={()=>setForm({...form,budget:b})} className={`rounded-full px-3 py-1.5 text-sm border ${form.budget===b ? 'bg-emerald-400 text-slate-900 border-transparent' : 'border-white/10 text-white hover:bg-white/10'}`}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-slate-300 mb-1">Message</label>
            <textarea required rows={5} value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <button disabled={status==='loading'} className="rounded-xl bg-cyan-400 text-slate-950 font-semibold px-5 py-3 hover:bg-cyan-300 transition disabled:opacity-60">
              {status==='loading' ? 'Sending…' : 'Send message'}
            </button>
            {status==='success' && <div className="text-emerald-300">Thanks! We\'ll be in touch shortly.</div>}
            {status==='error' && <div className="text-rose-300">Something went wrong. Please try again.</div>}
          </div>
        </form>
      </div>
    </section>
  )
}
