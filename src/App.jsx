import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import PlaySection from './components/PlaySection'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
            <span className="text-white font-semibold tracking-tight">zhurme</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#cases" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-lg bg-white/10 text-white px-4 py-2 border border-white/10 hover:bg-white/20">Let’s talk</a>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <Services />
        <CaseStudies />
        <PlaySection />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-emerald-400" />
            <div className="text-white font-medium">zhurme</div>
          </div>
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Zhurme Agency. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
