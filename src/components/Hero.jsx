import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Zhurme • Digital Marketing Studio
          </div>
          <h1 className="text-5xl/tight md:text-6xl/tight font-extrabold text-white tracking-tight">
            We craft playful, modern campaigns that move culture
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-xl">
            Full-funnel growth for ambitious brands. Strategy, content, paid media, and the kind of creative that gets screens to stop scrolling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-xl bg-cyan-400 text-slate-950 font-semibold px-5 py-3 hover:bg-cyan-300 transition">
              Start a project
            </a>
            <a href="#cases" className="rounded-xl border border-white/10 text-white px-5 py-3 hover:bg-white/10 transition">
              See case studies
            </a>
          </div>
        </div>
        <div className="h-[56vh] md:h-[64vh] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
