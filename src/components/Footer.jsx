const cols = [
  {
    heading: 'Expertise',
    links: ['Social Strategy', 'Content Creation', 'Activation', 'Data Analysis'],
  },
  {
    heading: 'Explore',
    links: ['Cases', 'Over ons', 'Blog', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#f5f1e6] px-5 pt-10 pb-8">
      {/* Brand logos grid — from screenshot: brand names in a 3-col grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {['NIKE', 'PUMA', 'RED BULL', 'ADIDAS', 'SAMSUNG', 'NETFLIX'].map((b) => (
          <div
            key={b}
            className="bg-white/60 rounded-xl py-3 flex items-center justify-center"
          >
            <span className="font-headline text-[11px] font-black uppercase tracking-widest text-[#2d2f2f]/60">
              {b}
            </span>
          </div>
        ))}
      </div>

      {/* Big logo */}
      <div className="font-headline text-[3.5rem] font-black tracking-tighter uppercase text-[#2d2f2f] leading-none mb-2">
        GET<br />HYPED
      </div>
      <p className="text-[13px] text-[#5a5c5c] font-medium mb-6 max-w-xs leading-relaxed">
        Wij creëren impactvolle content die blijft hangen in het geheugen van je doelgroep.
      </p>

      {/* CTA button */}
      <button className="bg-[#2d2f2f] text-white px-7 py-3 rounded-full font-bold text-sm mb-10 hover:opacity-80 transition-opacity active:scale-95">
        Plan een gratis audit
      </button>

      {/* Nav columns */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#2d2f2f] mb-3">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[12px] font-semibold text-[#5a5c5c] hover:text-[#005ab1] transition-colors block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex gap-3 mb-8">
        {['share', 'alternate_email'].map((icon) => (
          <div
            key={icon}
            className="w-9 h-9 rounded-full border border-zinc-300 flex items-center justify-center hover:border-[#005ab1] hover:text-[#005ab1] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 pt-5 flex flex-col gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-[#5a5c5c]">
          © 2024 Get Hyped. All rights reserved.
        </p>
        <span className="text-[#0085FF] text-[11px] font-bold uppercase tracking-wide">
          Made with passion in Amsterdam
        </span>
      </div>
    </footer>
  )
}
