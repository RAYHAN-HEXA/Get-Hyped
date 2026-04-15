const smallCases = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB92raKq3AlqtzJ5fsATPSosvijtBQF-k6mkDI9iveM-m06Gf95pzfNLdCgDdnj4suDBBvVtE2XqheQpPkBAWXqyv0eIpPqGehwl7G8uzc7ZHL8XlCsV4fNRc5iKXEypp0EstL6v2_f0nVrkYu340_bn507zORg6-GUZVip47lNoXyqKK48JVDQ1PtqcL51NDuFp3QWUmTlvO8ChM6dYwiorMyg-8XoSVIym3KIfHEvsTPSvGcx6_BIVi8_ba7KDF3EE9uvU9_zFsk',
    alt: 'Lifestyle content',
    title: 'The Wellness Project',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxbQQRVaMHz42xfycR5VdZH5S6ATZYlC0Ql5Zwfa1qh4sIWZcJIqVZXpfysJ6BKwQgX31Djiud4izV2Vhwyws8XncyUZn57VHtAgVLu7AsHE9FGq6s_3igTdSjjO68nYbwgiAucgMYF-Eu-h5VLXHajND3L0eOGL0Za8JBhYboGK6M8tEnjkU4P0QqlVBOnluqOkcTLGYTivYbofcV5jvzYg56-cpkrFUenGlyOcohaOcqQzNOuneZpReQS4MNMPKAOjZzxCpwSE',
    alt: 'Food and Beverage',
    title: 'Citrus Sparkle Launch',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPF8_ch18FaOH1DOXgkdn_8wUcQhpwxThY3_L1ugQBcWqUx1h_ul02ty61Pcn23UzCrmPxXTw_XHOmHA9gkEigdngn4_qqHanSizVW-Oi3-txIFnwCaVy4SoaxU7bRiFvVorPwf8A2uZH1OLXiE-9BOZnQGom9jDIIO-_ttI1dxO-Ujn14Z8RXhfJOfhV790GvVj_geDObV0Zrl5ex3HIm-K-F8r3DPjz1wRRlAaU8edsBP8IjlnhV5P5f1BB23_Yxe-YV-qOs9MY',
    alt: 'Music and Culture',
    title: 'Underground Beats',
  },
]

export default function CaseStudies() {
  return (
    <section className="px-5 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-7 gap-3">
        <div>
          <h2 className="font-headline text-[2.2rem] font-black tracking-tight leading-[1] mb-2">
            Content<br />dat scoort.
          </h2>
          <p className="text-[13px] text-[#5a5c5c] leading-relaxed max-w-[240px]">
            Bekijk hoe wij merken hebben getransformeerd van onzichtbaar naar onmisbaar.
          </p>
        </div>
        <button className="text-[#005ab1] font-bold text-xs flex items-center gap-0.5 hover:underline whitespace-nowrap mt-1 shrink-0">
          Alle cases
          <span className="material-symbols-outlined text-[16px]">east</span>
        </button>
      </div>

      {/* Large hero card */}
      <div className="group cursor-pointer mb-4">
        <div className="relative overflow-hidden rounded-2xl aspect-video shadow-md">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu0iVGe1XVSl8DhHx8TMVGba_KxpHz-QZwZOSfJCqyY9iAXBf3h19S5fcURfwZlXBU9PhlbjSqwe139OGikTpV9TN66KomDipVJXY0jjk1Hm333PwmuG3h-VJmfmcAoNRKm5PSC2oZJuoWVxq_IARDrbkEGOQ_DuYXrAl41vci3n1MZOgiAeSO61QY0rGOyQFniLE5r-YJUEGXojDLCtShEQnm701KrnXCvgKzKVJMazM2fru2Oxv84eEoZxX9lUkHXGUxiW2m_5Q"
            alt="Fashion editorial"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <span className="bg-[#005ab1] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">
              Case Study
            </span>
            <h4 className="font-headline text-xl font-black leading-tight">
              Van nul naar vol,<br />binnen 3 weken.
            </h4>
          </div>
        </div>
      </div>

      {/* Stat card */}
      <div className="rounded-2xl bg-[#ff9379]/20 p-5 mb-4 cursor-pointer hover:bg-[#ff9379]/30 transition-colors">
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
          <span className="material-symbols-outlined text-[#b02600] text-2xl">auto_graph</span>
        </div>
        <h4 className="font-headline text-lg font-black mb-2">400% organische groei voor Tech-Startup</h4>
        <p className="text-[#5a5c5c] text-[13px] font-medium mb-4 leading-relaxed">
          Hoe we LinkedIn domineerden zonder advertentiebudget.
        </p>
        <div className="flex items-center gap-1 font-bold text-sm">
          Lees verder
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </div>
      </div>

      {/* Small cards — stacked on mobile, 3-col on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {smallCases.map((c) => (
          <div key={c.title} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden h-44 shadow-sm">
              <img
                src={c.img}
                alt={c.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h5 className="mt-2.5 font-black text-[15px]">{c.title}</h5>
          </div>
        ))}
      </div>
    </section>
  )
}
