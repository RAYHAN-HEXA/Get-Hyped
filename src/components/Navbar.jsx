import { useState } from 'react'

const links = [
  { label: 'Strategy', href: '#strategy', active: true },
  { label: 'Case Studies', href: '#cases' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f6f6f6]/80 backdrop-blur-xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-5">
        {/* Logo */}
        <div className="text-2xl font-black text-zinc-900 uppercase tracking-tighter" style={{ fontFamily: 'Epilogue' }}>
          Get Hyped
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center" style={{ fontFamily: 'Epilogue' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-bold transition-opacity hover:opacity-80 ${l.active ? 'text-[#0085FF]' : 'text-zinc-600'}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#0085FF] text-2xl">bolt</span>
          <button className="hidden sm:block bg-[#005ab1] text-[#eff2ff] px-6 py-2 rounded-full font-bold text-sm hover:opacity-80 transition-opacity active:scale-95 duration-200">
            Get Started
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-zinc-900 transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 border-t border-zinc-200/60" style={{ fontFamily: 'Epilogue' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-lg font-bold py-2 transition-opacity hover:opacity-70 ${l.active ? 'text-[#0085FF]' : 'text-zinc-800'}`}
            >
              {l.label}
            </a>
          ))}
          <button className="mt-2 bg-[#005ab1] text-[#eff2ff] px-6 py-3 rounded-full font-bold text-sm w-full hover:opacity-80 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}
