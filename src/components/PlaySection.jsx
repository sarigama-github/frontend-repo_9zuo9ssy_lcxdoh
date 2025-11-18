import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function PlaySection() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 120, damping: 12 })
  const springY = useSpring(y, { stiffness: 120, damping: 12 })

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      x.set(((e.clientX - innerWidth / 2) / innerWidth) * 40)
      y.set(((e.clientY - innerHeight / 2) / innerHeight) * 40)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [x, y])

  const blobs = [
    'bg-gradient-to-tr from-cyan-400/40 to-emerald-400/40',
    'bg-gradient-to-tr from-fuchsia-400/40 to-cyan-400/40',
    'bg-gradient-to-tr from-amber-400/40 to-rose-400/40',
  ]

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Playful by design</h2>
          <p className="mt-3 text-slate-300">An interactive canvas that responds as you explore.</p>
        </div>
        <div className="relative h-72 md:h-96 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          {blobs.map((b, i) => (
            <motion.div
              key={i}
              className={`absolute h-56 w-56 md:h-72 md:w-72 rounded-full blur-3xl ${b}`}
              style={{ x: springX, y: springY, left: i * 120 + 40, top: 50 + i * 30 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
            />
          ))}
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-xl bg-slate-900/70 border border-white/10 backdrop-blur px-6 py-4 text-center">
              <div className="text-white font-semibold">Move your cursor</div>
              <div className="text-slate-300 text-sm">The scene reacts in real-time.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
