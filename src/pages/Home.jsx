import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-[80px]">
      {/* Hero Section: Split Layout 61.8% / 38.2% */}
      <section className="relative min-h-[751px] flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-[61.8%] flex flex-col justify-center px-[5.6%] py-xxxl bg-white relative z-10">
          <div className="max-w-[600px]">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.3em] uppercase mb-lg block">Ethereal Craftsmanship</span>
            <h1 className="font-display text-display text-on-surface mb-xl leading-tight">Serenity in <span className="font-serif italic font-normal text-primary">Hand-Drawn</span> Silk</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xxl max-w-[480px]">
              Experience the mathematical harmony of traditional batik motifs rendered in our signature baby blue palette. A dialogue between heritage and modern luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-lg">
              <Link to="/products">
                <button className="bg-[#89cff0] text-[#001F3F] px-xl py-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-[#78c0e0] transition-all border border-[#89cff0] w-full sm:w-auto">
                  Explore Collection
                </button>
              </Link>
              <button className="border border-[#001F3F] text-[#001F3F] px-xl py-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-slate-50 transition-all">
                Our Craft
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[38.2%] h-[400px] md:h-auto relative overflow-hidden">
          <img className="absolute inset-0 w-full h-full object-cover" alt="Close up of high-end light blue silk batik fabric with intricate white hand-drawn patterns being held by a model in soft daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JBJxmfbOUj3D8zoF4c34PDSSx3wjAqIrYJerexmTv5ceHa_vNT5LJ8-QTIFqciJigV2a4PvtqG0QxaDsEirXobnxhG8NoPzDwCH-prnr2kjcn3h1k2u3lxW1LX4VWqiV6dNmDpRxv9TbrRXhS5kHGg7npVN67XipDacgQlu8kYUMYDuGc7lEyVD-yMINUrz_KKGrUXPHGqnJBBv7nWrOfAgi7LRJJn3pr-EBhcz6A2x8fiM9ltDcyK6ZsAVBoX-Kp0r-eobThdIa" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Category Discovery: Golden Ratio Grid */}
      <section className="py-xxxl px-[5.6%] bg-[#F9F9F7]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-xxl flex justify-between items-end">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">The Technique</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Selected by method of creation</p>
            </div>
            <Link className="font-label-caps text-label-caps text-primary border-b border-primary/30 pb-xs hover:border-primary transition-all" to="/products">View All Techniques</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg aspect-[1/0.618]">
            {/* Tulis (Large) */}
            <div className="md:col-span-8 group relative overflow-hidden border border-slate-900/5 shadow-[0_4px_20px_rgba(0,31,63,0.03)] hover:shadow-xl transition-all duration-500">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Artisan hand-drawing complex batik patterns using a canting tool and wax on premium white silk in a sunlit workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTLzH4Nxga1CCJ84fK_lKWCGKH4Nf23vdg2gc1PBLL21qc0blT1ZJ8696Xgff2FAiRXJiX34JQftsuzQ3v5XyzFtiArDOH3KszsXFDhzi7FCgo5xAcSRyCCwmMl5qMSB9rC8Zk3ckOpkDzxWzP9Mkrnh485OkCUc2mkrmhyQEDf8pm2fU_lpvRO3WvHKJgXJBGLcaqYD_x2vfU1w_XNuaTXYEuWDw-J-tNVUWbm_3M8JpWTKWMdmdFNUQBZmKAn3CJgzb4tPB73GfL" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex flex-col justify-end p-xl">
                <span className="text-white/80 font-label-caps text-body-sm tracking-[0.2em] mb-xs uppercase">The Masterpiece</span>
                <h3 className="text-white font-headline-md text-headline-md">Batik Tulis</h3>
              </div>
            </div>
            {/* Side Stack */}
            <div className="md:col-span-4 flex flex-col gap-lg">
              {/* Cap */}
              <div className="flex-1 group relative overflow-hidden border border-slate-900/5 shadow-[0_4px_20px_rgba(0,31,63,0.03)]">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Symmetrical batik cap patterns in shades of baby blue and cream laid out on a minimalist wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJ4WiFXrd5uGR2W1uVnRmk3QhiPu9uy_Gr782eCsbfi5EEhY1PxHuMXFu-1IZmJpaVcdLUsUf6AM30Miz6kovcNmUo8TnWH1W6YwVLB0yYMMYPu3JHlbuaR-htqG9mnhtv6TvhUGRJ_-OZn-TyOU1gXVgp4vKxi3MUTLkQ0GeYVRuvypoF-Sthh2lnmqNjpPr0RtJRErRdnw8CvIdMBUuR0e-9uSXNNFI1HDydrL--Ua3Ed5dnYEXPugp8cYt7aQctH1dnRt5emDb" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex flex-col justify-end p-lg">
                  <h3 className="text-white font-headline-md text-headline-md">Batik Cap</h3>
                </div>
              </div>
              {/* Print */}
              <div className="flex-1 group relative overflow-hidden border border-slate-900/5 shadow-[0_4px_20px_rgba(0,31,63,0.03)]">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Modern batik print fashion accessory close up with clean geometric floral patterns in serene blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2_3j2gIdlAOfJJyNDSRzPZfiv0TTimCSsxTWaez2l8v6TlEDvHuli4t0PO5sgADEb_L1pVCQEQIKAKhJTs6yS-MChDqNYIv6qQmtFPnJHTRoztjZBO4Wk2BiPF6rhaRPN9ep5Xpe1wBiuTdyi_962cK5TebpEy2PbYEAS4zTLqnZoYsMJsXW7KrY9iDeDw7wB3DttI21oLNU-x-Uf2NAGmbh8VcJz6oRNAwGeXjqaZoTJE-UMOB8ihUrK4EvkRBrVWD6g2hlsF0b" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent flex flex-col justify-end p-lg">
                  <h3 className="text-white font-headline-md text-headline-md">Batik Print</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Narrative: Storytelling Section */}
      <section className="py-xxxl bg-white">
        <div className="max-w-[1440px] mx-auto px-[5.6%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xxxl items-center">
            <div className="relative aspect-[1:1.618] md:aspect-square overflow-hidden shadow-[20px_20px_60px_rgba(0,31,63,0.05)]">
              <img className="w-full h-full object-cover" alt="Delicate silk fabric draped elegantly over a marble pedestal in a bright gallery-like setting with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkHXIV6PiAkeZyY2C068_8icCGdMDUNa7NuPYqvAe6wK036dBQvqq45NnR2Vo11GH6ch30xEnjc6drn2-HDDHEyKQ6ZMnAdjVfsoRfpMLR78dyk7P5KMpjl8wcr-GDRPGEJH8QuzY-U73BVT4WJdEfBOsGzvSXKME8qbxaT_kMPbAzcl4O1I1-6VmmK68AR-N3SoGENWkJWFTGCxQ803KoAN6vFNAf76ips2ddnacdv9wfdtBGDsynz1GJOhe2qYcW9mwo7UZdsB1P" />
              <div className="absolute -bottom-md -right-md w-xxxl h-xxxl bg-primary-container p-lg flex items-center justify-center text-on-primary-container">
                <span className="font-serif italic text-headline-lg">1924</span>
              </div>
            </div>
            <div className="space-y-xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Art of Batik</span>
              <h2 className="font-headline-lg text-headline-lg leading-tight">Mathematical Harmony <br/>&amp; Premium Comfort</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our process begins with the finest 100% natural silk and cotton, selected for their breathability and luxurious hand-feel. Each piece of SERENE batik is a testament to the patient art of wax-resistance dyeing.
              </p>
              <div className="grid grid-cols-2 gap-lg pt-lg">
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-sm">Sustainably Sourced</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Using natural dyes derived from indigenous plants and minerals.</p>
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface uppercase mb-sm">Artisan Led</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Collaborating with third-generation batik masters in Solo and Jogja.</p>
                </div>
              </div>
              <div className="pt-lg">
                <a className="inline-flex items-center gap-md font-label-caps text-label-caps text-primary uppercase group" href="#">
                  Discover Our Heritage
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards (Modern Bento Style) */}
      <section className="py-xxxl px-[5.6%] bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-xxl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Curated Series</h2>
            <div className="flex justify-center gap-md mt-md">
              <span className="bg-primary-container/20 text-on-primary-container px-md py-xs font-label-caps text-body-sm rounded-sm">Silk</span>
              <span className="bg-primary-container/20 text-on-primary-container px-md py-xs font-label-caps text-body-sm rounded-sm">Hand-Drawn</span>
              <span className="bg-primary-container/20 text-on-primary-container px-md py-xs font-label-caps text-body-sm rounded-sm">Limited</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {/* Product 1 */}
            <Link to="/product" className="group block bg-white border border-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)]">
              <div className="aspect-[1:1.618] overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Minimalist men's batik shirt in soft baby blue silk with micro-floral patterns hung against a white wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3fT3Efrfa0ILe6jyiCOS3UKa8umrXTr09LnCP5XHSs6HdHjCp3iP5fzyopAw4sj1jACmzLBoJHrF611x-yHWV_S0XChQ9m8In3Sr15E7fMXcGh8YTo-sJvTmWo2O_yeGThywjeoaE7dJjZ0nRA22noJF5KFssGad0OgjX_plEytxZHCIP9aAJsP58DO8PWV2Nx97TpKsepSYWuUMKOMEU1CfPIX-myEECkby5RGTOviuw4YrLByBmw39dJ2VruOdLrCZlqModuSBC" />
                <button className="absolute top-md right-md bg-white/80 p-sm rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.preventDefault()}>
                  <span className="material-symbols-outlined text-primary" data-icon="favorite">favorite</span>
                </button>
              </div>
              <div className="p-lg text-center">
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase mb-xs">Morning Dew Scarf</h3>
                <p className="font-serif italic text-on-surface-variant text-sm mb-md">Premium Silk Tulis</p>
                <p className="font-label-caps text-primary">$280.00</p>
              </div>
            </Link>
            {/* Product 2 */}
            <Link to="/product" className="group block bg-white border border-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)]">
              <div className="aspect-[1:1.618] overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Elegant baby blue batik fabric draped over an armchair in a sunlit modern interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqnVALYSgWEKdKsg42t-SaGzV6DDpu1zuD6F18bB4G9sWsCfCBP2Y51GH5KAOY2LLk_g9tqKH7ccMgCLvhbCK519l_wBI_-7itu32Sn3ndhuZZHpVVs1HbG84hytmBg49Ss8Eo0xJcUZrgLuMWlvTctXE8GwKkDxjHpg0v6pgfK39lKhL3TmqnaB5Ug9uFGI5BCD07EtlEvLay51SabI2Fw8Lvu3ra7MPgvBYAbeH9OXNVstlLoJARsdCH3ZWcuPVZJ__MlYdGA4ou" />
              </div>
              <div className="p-lg text-center">
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase mb-xs">Ocean Breeze Foulard</h3>
                <p className="font-serif italic text-on-surface-variant text-sm mb-md">Hand-Stamped Cotton</p>
                <p className="font-label-caps text-primary">$120.00</p>
              </div>
            </Link>
            {/* Product 3 */}
            <Link to="/product" className="group block bg-white border border-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)]">
              <div className="aspect-[1:1.618] overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Artisan batik kimono in light blue silk with dramatic wave patterns displayed on a minimalist hanger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkEkIU6p2Fre2yVE4SE5Injz0vrHCGeWu9L25I_SpVykiyCH9ZzaGoNDl-bdracy7495p0xhvMFQF_xop81_4WDDI1mBsDg8nbVHYPRMh5-HTRa7cz5GmQ9gaqEtiqTEXZ35pUVPeF-rT6Vqq-GqzeWhFNZsTOmoj1Anof-ZNTVCdICSt2lQAn5zmENsi01-KyWDfdPQuso_uK5Bffj4x6fLU6aupDWFZMsWsqucfS-naC0SSji9FSsioDZ5CXmbXSxXmO4u0quV-b" />
              </div>
              <div className="p-lg text-center">
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase mb-xs">Cerulean Wave Kimono</h3>
                <p className="font-serif italic text-on-surface-variant text-sm mb-md">Batik Tulis Silk</p>
                <p className="font-label-caps text-primary">$450.00</p>
              </div>
            </Link>
            {/* Product 4 */}
            <Link to="/product" className="group block bg-white border border-slate-900/5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,31,63,0.08)]">
              <div className="aspect-[1:1.618] overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Folded batik fabrics in various shades of blue and white showing different traditional Javanese patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOe9yVei7sBYKxW0VHR38La6cL6C6Kow1QJndR9YpfcejxZEdwY_cXztJ0i3q4cHhKBckAiGaOwSuPDfhzj_AyI7QNR-RmJSalXTXucFy1Y3VkhF6Q7Cgh1IsqUr8VW-iYUSe64jwiP8J6ZDDp4evJeNT0VFPYQ1AXkHiTU50kLas_dgB9QX4KCGI5RPZiI-nRX34U0IyKBmVmDw2Yl0ffgpfXVek9lMW1ESfyYwYrq5Nc3CFmFGRggp-xcv7ZF6WpOd86Hn9nDRaD" />
              </div>
              <div className="p-lg text-center">
                <h3 className="font-label-caps text-label-caps text-on-surface uppercase mb-xs">Azure Bloom Collection</h3>
                <p className="font-serif italic text-on-surface-variant text-sm mb-md">Mixed Technique Series</p>
                <p className="font-label-caps text-primary">$190.00</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
