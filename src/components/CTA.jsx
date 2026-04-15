export default function CTA() {
  return (
    <section className="px-5 py-10">
      <div className="bg-[#2d2f2f] rounded-[1.75rem] px-6 py-10 text-center relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#005ab1] opacity-20 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#ab008b] opacity-20 blur-[100px]" />
        <h2 className="font-headline text-[2rem] font-black text-white leading-tight tracking-tight mb-8 relative z-10">
          Jouw merk naar het<br />volgende niveau?
        </h2>
        <div className="flex flex-col items-center gap-4 relative z-10">
          <button className="bg-[#005ab1] text-white px-8 py-4 rounded-full font-bold text-sm w-full max-w-xs hover:scale-105 transition-transform active:scale-95">
            Plan een gratis audit
          </button>
          <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm w-full max-w-xs hover:bg-white/10 transition-colors">
            Bekijk diensten
          </button>
        </div>
      </div>
    </section>
  )
}
