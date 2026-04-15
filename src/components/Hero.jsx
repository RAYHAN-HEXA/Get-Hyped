export default function Hero() {
  return (
    <section className="px-5 pt-8 pb-6 overflow-hidden">
      {/* Heading */}
      <h1 className="font-headline text-[2.75rem] leading-[0.92] font-black tracking-tighter text-[#2d2f2f] mb-5">
        Get Hyped.<br />
        <span className="text-[#005ab1]">Get Noticed.</span><br />
        Get Results.
      </h1>

      {/* Overlapping rotated cards */}
      <div className="relative h-52 mb-6">
        {/* Right card — tilted clockwise */}
        <div className="absolute right-2 top-0 w-[42%] h-full rounded-3xl overflow-hidden shadow-lg rotate-[6deg] z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0iVGe1XVSl8DhHx8TMVGba_KxpHz-QZwZOSfJCqyY9iAXBf3h19S5fcURfwZlXBU9PhlbjSqwe139OGikTpV9TN66KomDipVJXY0jjk1Hm333PwmuG3h-VJmfmcAoNRKm5PSC2oZJuoWVxq_IARDrbkEGOQ_DuYXrAl41vci3n1MZOgiAeSO61QY0rGOyQFniLE5r-YJUEGXojDLCtShEQnm701KrnXCvgKzKVJMazM2fru2Oxv84eEoZxX9lUkHXGUxiW2m_5Q"
            alt="Fashion editorial"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left card — tilted counter-clockwise, on top */}
        <div className="absolute left-2 top-3 w-[42%] h-full rounded-3xl overflow-hidden shadow-2xl -rotate-[4deg] z-10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQJwuXEULAyTr-TdixlYuID2A9Kc16MqaUEreXCr6kJZd7wCKVE99hOoW96aLjPoBUzc2qbXb9KAKFc3KoF3Cx6Riaz5Z39z8TBcIFx9rIL2-LWaXbtbBayyvb8aYiPqeQogIeDPUzyEyzmoiKdZk6vLMACtFOFdL-ATZ9kzm8ezp44O84hPle2-Z-o1w7qnj4Z-Nwe5rLLYxopDyaX1btPeAqPmVnLbGdHQvrypjX2OPwM3COri0OBPncs7diDh3HnQ71X3xxQO8"
            alt="Woman in closet"
            className="w-full h-full object-cover"
          />
          {/* Metric badge */}
          <div className="absolute bottom-3 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2 flex items-center gap-2 shadow-md">
            <div className="w-7 h-7 bg-[#005ab1] rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white" style={{ fontSize: '14px' }}>trending_up</span>
            </div>
            <div>
              <div className="text-sm font-black text-[#2d2f2f] leading-none">10M+</div>
              <div className="text-[8px] font-bold uppercase tracking-wider text-[#5a5c5c] leading-tight">Views Generated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#5a5c5c] font-medium mb-5 leading-relaxed max-w-sm">
        Klaar met gokken op content die niets oplevert? Wij bouwen content strategieën die converteren en merken die blijven plakken.
      </p>

      {/* CTA */}
      <button className="bg-[#b02600] text-white px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2 group transition-all hover:bg-[#9a2000] active:scale-95">
        Start je project
        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </section>
  )
}
