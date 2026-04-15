const brands = ['NIKE', 'PUMA', 'RED BULL', 'ADIDAS', 'SAMSUNG', 'NETFLIX', 'APPLE', "L'ORÉAL"]

export default function BrandsTicker() {
  return (
    <section className="py-8 bg-white overflow-hidden border-y border-[#acadad]/20">
      <div className="flex items-center whitespace-nowrap animate-ticker opacity-40 hover:opacity-70 transition-opacity">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={i}
            className="font-headline text-lg font-black uppercase tracking-widest px-6 text-[#2d2f2f]"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
