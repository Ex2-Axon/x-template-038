import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="relative min-h-screen flex flex-col p-4 md:p-8 lg:p-16">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[150px] rounded-full animate-float-slow delay-1000" />
      </div>

      <header className="z-10 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-accent shadow-[0_0_15px_#5CFF8C]" />
          <div>
            <h1 className="font-heading text-lg font-black tracking-tighter">BIOCYCLE_ALPHA</h1>
            <p className="text-[10px] text-muted tracking-[0.4em] uppercase">Status: Synthesizing</p>
          </div>
        </div>
        <div className="text-[10px] font-heading text-text/30 tracking-[1em] uppercase">v1.38.0 // BAUHAUS_GROVE</div>
      </header>

      <main className="z-10 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
        <section className="md:col-span-7 bento-card flex flex-col justify-end min-h-[500px] relative group overflow-hidden">
          <img src={heroImg} className="absolute top-0 left-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 group-hover:scale-105 transition-all duration-1000" alt="" />
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter glow-text">ARCANE<br/><span className="text-accent">BOTANICA</span></h2>
            <p className="text-xl font-light text-text/60 max-w-md border-l border-accent/20 pl-6">Unearthing digital flora within structured realms. A synthesis of organic mystique and cybernetic precision.</p>
          </div>
        </section>

        <section className="md:col-span-5 bento-card flex flex-col items-center justify-center text-center">
          <div className="relative mb-12 group cursor-pointer" onClick={() => setCount(c => c + 1)}>
            <div className="absolute inset-0 bg-accent blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative w-48 h-48 border-2 border-accent/20 rounded-full flex items-center justify-center group-hover:border-accent/50 transition-all duration-500 rotate-45 group-hover:rotate-0">
              <span className="text-5xl font-black text-accent glow-text font-heading">{count}</span>
            </div>
          </div>
          <button onClick={() => setCount(c => c + 1)} className="font-heading text-xs tracking-[0.5em] uppercase text-accent border border-accent/30 px-8 py-4 rounded-none hover:bg-accent hover:text-background transition-all">
            SYNTHESIZE GROVES
          </button>
        </section>

        <section className="md:col-span-5 bento-card">
          <h3 className="text-xs font-black tracking-[0.5em] uppercase text-muted mb-8">Architectural Stack</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/5 pb-4 group">
              <div className="flex items-center gap-4">
                <img src={viteLogo} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" alt="" />
                <span className="text-sm font-light">VITE SYSTEM</span>
              </div>
              <span className="text-[10px] text-muted">v8.0</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-4 group">
              <div className="flex items-center gap-4">
                <img src={reactLogo} className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all animate-spin-slow" alt="" />
                <span className="text-sm font-light">REACT ENGINE</span>
              </div>
              <span className="text-[10px] text-muted">v19.0</span>
            </div>
          </div>
        </section>

        <section className="md:col-span-7 bento-card">
          <h3 className="text-xs font-black tracking-[0.5em] uppercase text-muted mb-8">Modular Nodes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['GH', 'DC', 'X', 'BS'].map(node => (
              <div key={node} className="aspect-square border border-white/5 flex items-center justify-center hover:border-accent/40 hover:bg-accent/5 transition-all cursor-pointer group">
                <span className="font-heading text-sm text-text/20 group-hover:text-accent transition-colors">{node}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="z-10 mt-24 py-12 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/5">
        <div className="max-w-xs text-[10px] text-text/20 leading-relaxed font-heading uppercase tracking-widest">
          A sophisticated fusion of dark cottagecore mystique and Bauhaus precision. All rights reserved © 2026 Microtronic.
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-accent tracking-widest mb-1">LUMINESCENCE</span>
            <span className="text-[8px] text-text/20">PEAK STRENGTH 0.85</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-primary tracking-widest mb-1">STRUCTURE</span>
            <span className="text-[8px] text-text/20">REINFORCED BAUHAUS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App
