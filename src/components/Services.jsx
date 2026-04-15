const services = [
  {
    num: '01',
    tag: 'Strategy',
    title: 'Social\nstrategy',
    desc: 'Een roadmap die verder gaat dan alleen posts. Wij bepalen je tone-of-voice en visuele identiteit.',
    bg: 'bg-[#efefef]',
    tagBg: 'bg-[#2d2f2f]',
    tagText: 'text-white',
    btnBg: 'bg-[#b02600]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB92raKq3AlqtzJ5fsATPSosvijtBQF-k6mkDI9iveM-m06Gf95pzfNLdCgDdnj4suDBBvVtE2XqheQpPkBAWXqyv0eIpPqGehwl7G8uzc7ZHL8XlCsV4fNRc5iKXEypp0EstL6v2_f0nVrkYu340_bn507zORg6-GUZVip47lNoXyqKK48JVDQ1PtqcL51NDuFp3QWUmTlvO8ChM6dYwiorMyg-8XoSVIym3KIfHEvsTPSvGcx6_BIVi8_ba7KDF3EE9uvU9_zFsk',
    imgAlt: 'Social strategy',
  },
  {
    num: '02',
    tag: 'Creation',
    title: 'Content\ncreation',
    desc: "Van high-end video's tot snappy shorts. Wij creëren de beelden die de duim doen stoppen.",
    bg: 'bg-[#e8b4f8]',
    tagBg: 'bg-[#ab008b]',
    tagText: 'text-white',
    btnBg: 'bg-[#2d2f2f]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuxbQQRVaMHz42xfycR5VdZH5S6ATZYlC0Ql5Zwfa1qh4sIWZcJIqVZXpfysJ6BKwQgX31Djiud4izV2Vhwyws8XncyUZn57VHtAgVLu7AsHE9FGq6s_3igTdSjjO68nYbwgiAucgMYF-Eu-h5VLXHajND3L0eOGL0Za8JBhYboGK6M8tEnjkU4P0QqlVBOnluqOkcTLGYTivYbofcV5jvzYg56-cpkrFUenGlyOcohaOcqQzNOuneZpReQS4MNMPKAOjZzxCpwSE',
    imgAlt: 'Content creation',
  },
  {
    num: '03',
    tag: 'Activation',
    title: 'Activation',
    desc: 'Influencer marketing en community management die je bereik laten exploderen.',
    bg: 'bg-[#c8edc4]',
    tagBg: 'bg-[#2a6325]',
    tagText: 'text-white',
    btnBg: 'bg-[#2d2f2f]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPF8_ch18FaOH1DOXgkdn_8wUcQhpwxThY3_L1ugQBcWqUx1h_ul02ty61Pcn23UzCrmPxXTw_XHOmHA9gkEigdngn4_qqHanSizVW-Oi3-txIFnwCaVy4SoaxU7bRiFvVorPwf8A2uZH1OLXiE-9BOZnQGom9jDIIO-_ttI1dxO-Ujn14Z8RXhfJOfhV790GvVj_geDObV0Zrl5ex3HIm-K-F8r3DPjz1wRRlAaU8edsBP8IjlnhV5P5f1BB23_Yxe-YV-qOs9MY',
    imgAlt: 'Activation',
  },
  {
    num: '04',
    tag: 'Data',
    title: 'Data',
    desc: 'Cijfers liegen niet. Wij analyseren elke pixel om je ROI continu te verbeteren.',
    bg: 'bg-[#aecfff]',
    tagBg: 'bg-[#005ab1]',
    tagText: 'text-white',
    btnBg: 'bg-[#2d2f2f]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu0iVGe1XVSl8DhHx8TMVGba_KxpHz-QZwZOSfJCqyY9iAXBf3h19S5fcURfwZlXBU9PhlbjSqwe139OGikTpV9TN66KomDipVJXY0jjk1Hm333PwmuG3h-VJmfmcAoNRKm5PSC2oZJuoWVxq_IARDrbkEGOQ_DuYXrAl41vci3n1MZOgiAeSO61QY0rGOyQFniLE5r-YJUEGXojDLCtShEQnm701KrnXCvgKzKVJMazM2fru2Oxv84eEoZxX9lUkHXGUxiW2m_5Q',
    imgAlt: 'Data',
  },
]

function ServiceCard({ s }) {
  return (
    <article className={`${s.bg} px-5 py-7 group cursor-pointer`}>
      {/* Tag row */}
      <div className="flex items-center justify-between mb-3">
        <span className={`${s.tagBg} ${s.tagText} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
          {s.tag}
        </span>
        <span className="font-headline text-5xl font-black opacity-[0.08] leading-none">{s.num}</span>
      </div>

      {/* Title */}
      <h3 className="font-headline text-[1.75rem] font-black tracking-tight leading-tight mb-4 text-[#2d2f2f] whitespace-pre-line">
        {s.title}
      </h3>

      {/* Image */}
      <div className="rounded-2xl overflow-hidden shadow-md w-full aspect-[4/3] mb-4">
        <img
          src={s.img}
          alt={s.imgAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Desc + button */}
      <div className="flex items-end justify-between gap-3">
        <p className="text-[13px] font-medium leading-relaxed text-[#2d2f2f]/70 flex-1">
          {s.desc}
        </p>
        <button
          aria-label={`More about ${s.tag}`}
          className={`${s.btnBg} text-white w-11 h-11 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}
        >
          <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
        </button>
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => <ServiceCard key={s.num} s={s} />)}
      </div>
    </section>
  )
}
