import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <main className="pt-[120px] pb-xxxl px-[5.6%] max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Image Gallery (Golden Ratio: ~0.618 span) */}
        <div className="lg:col-span-7 flex flex-col gap-lg">
          <div className="relative w-full aspect-[1/1.618] overflow-hidden bg-surface-container-low">
            <img alt="Premium Batik Shirt" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx0VSuQmcXWTMzVSFOVDj3N9gq7BxfHB388bbzDQkhUoQKF2QZwemclcqijKpj-8mt4zqZwZAQLfZq0LGsd66pj8CxOPn3Ulc7-6b3bBhjbJpJW1Q-AofYn9uBXr5vJ3eIuUpkdzjX5zZUMW6T8FdK7CbBk9AGZNKr47PbxEEG9haB04q0qRQbdkXva5ImfoKfaFLJ_3BAJW-Fx0oc0rxPUVFHUCLCITsr6pNOGhz3qxqE6XT7dB8PZ7plikVkPw7eZKRvROoLTEx1" />
            <div className="absolute bottom-lg right-lg bg-white/40 backdrop-blur-sm px-md py-xs rounded-sm">
              <p className="font-label-caps text-body-sm text-on-surface uppercase">Heritage Silk</p>
            </div>
          </div>
          {/* Secondary Images Grid */}
          <div className="grid grid-cols-2 gap-md">
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img alt="Fabric Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9K7B5WCbD4JqUCuvSNsoU1CsQQn1AvEtSya4YB67o2fAaDNm4dP47_GvUBnDuPUH5WKI1DhxKFktrWFt9Jqb9o48FTW_45IxRp7AkqtcIXANgjMsvuHxBYFHyz-OZu8wkuUz-f9QRIc0UH-EnBgRR7IWWEtXXOViP3Uhpgaz7qTHeWatbnVau-UpFi8PY33WfkLvixgSmSosmN27PwAwL6qz8jBuucVowAe1tXF64z1xnoXmq2MmvL92QAJOTWK6kinDLuJOMBfnL" />
            </div>
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img alt="Lifestyle Shot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZxV8JLKWN3nfdB1OSaTAegBSKckcZWTYvluwXulmZO4R9b4Xd-ZYVmyLbbgn6lXym6gF3Eri8jQ417Nz2mmVak0FSGolZC4ZWmG3pe5WMVUlpdWWivWXWxplziYifG6yvtjGJ4VqSaxfzgwVKTNlzFzDUeBgG_xea1GDZKJidrUBbaFQguje_2sxOhq_84iulKX6bEm4hsEcOX6SyWAH659XW0ekcJWS8Ytpgi8dfFMn5YsgmBptru3EJvM7p5-4vyBTi2Fx_72DK" />
            </div>
          </div>
        </div>

        {/* Product Details (Golden Ratio: ~0.382 span) */}
        <div className="lg:col-span-5 lg:pl-xl flex flex-col">
          <nav className="flex items-center gap-sm mb-lg font-label-caps text-body-sm text-outline uppercase tracking-widest">
            <span>Collection</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary">Modern Batik</span>
          </nav>

          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-xs leading-tight">The Celestial Indigo</h1>
          <p className="font-body-lg text-body-lg text-secondary mb-xl font-medium">$285.00</p>

          <div className="flex flex-wrap gap-sm mb-xl">
            <span className="px-md py-xs bg-primary-container/20 text-on-primary-container font-label-caps text-[10px] rounded-sm">Hand-Drawn</span>
            <span className="px-md py-xs bg-primary-container/20 text-on-primary-container font-label-caps text-[10px] rounded-sm">Premium Silk</span>
            <span className="px-md py-xs bg-primary-container/20 text-on-primary-container font-label-caps text-[10px] rounded-sm">Limited Edition</span>
          </div>

          <div className="space-y-lg mb-xxl">
            <h3 className="font-label-caps text-body-sm text-on-surface border-b border-outline-variant pb-xs">Heritage &amp; Comfort</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A masterwork of Indonesian craftsmanship, this piece features hand-painted motifs inspired by the Javanese night sky. Crafted from our signature 100% heavy-weight silk, it offers unparalleled breathability and a drape that moves with effortless grace.
            </p>
          </div>

          {/* Size Selection */}
          <div className="mb-xl">
            <div className="flex justify-between items-center mb-md">
              <span className="font-label-caps text-body-sm text-on-surface uppercase">Select Size</span>
              <button className="text-primary font-label-caps text-body-sm border-b border-primary hover:text-on-primary-container transition-colors">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-sm">
              <button className="border border-outline-variant py-md text-center font-label-caps text-body-sm hover:border-primary hover:text-primary transition-all">S</button>
              <button className="border-2 border-primary py-md text-center font-label-caps text-body-sm text-primary bg-primary-container/10">M</button>
              <button className="border border-outline-variant py-md text-center font-label-caps text-body-sm hover:border-primary hover:text-primary transition-all">L</button>
              <button className="border border-outline-variant py-md text-center font-label-caps text-body-sm hover:border-primary hover:text-primary transition-all">XL</button>
            </div>
          </div>

          <div className="flex flex-col gap-md">
            <Link to="/checkout" className="w-full">
              <button className="w-full bg-primary-container text-on-primary-fixed py-xl font-label-caps text-body-lg tracking-[0.2em] uppercase hover:bg-primary transition-colors duration-300 shadow-lg shadow-primary/10">
                Add to Cart
              </button>
            </Link>
            <button className="w-full border border-on-surface py-lg font-label-caps text-body-sm tracking-[0.2em] uppercase hover:bg-on-surface hover:text-white transition-all duration-300">
              Find in Store
            </button>
          </div>

          {/* Technical Details */}
          <div className="mt-xxl space-y-md border-t border-outline-variant pt-xl">
            <details className="group">
              <summary className="flex justify-between items-center list-none cursor-pointer font-label-caps text-body-sm uppercase tracking-widest text-on-surface py-sm">
                Composition &amp; Care
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="pt-md text-body-sm text-on-surface-variant leading-relaxed">
                100% Hand-dyed Silk. Dry clean only. Iron on low heat with a pressing cloth to preserve the wax-resist detailing.
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center list-none cursor-pointer font-label-caps text-body-sm uppercase tracking-widest text-on-surface py-sm">
                Shipping &amp; Returns
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="pt-md text-body-sm text-on-surface-variant leading-relaxed">
                Complimentary worldwide shipping on orders over $500. Returns accepted within 14 days of receipt in original packaging.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Recommended Bento Grid */}
      <section className="mt-xxxl">
        <h2 className="font-headline-md text-headline-md mb-xl text-center">Complete the Narrative</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-[600px]">
          <div className="md:col-span-2 relative overflow-hidden group cursor-pointer bg-surface-container">
            <img alt="Linen Trousers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4FdplRunxc6lrfdVGzac_IH-KaNmiSnF49dyO-K7ggyf1hrIKZwFRciklsxCQVLl1Z51vHJGad8kIp6kjltRK5g1TvprTDYvNj0NVvatkfWOYWZx49EqQwkt3SVnabYHELnr4Pi1Ef4Ht6Wd0jvDa53kdeQvNAk4WJAtloG684YipWPVy_RqQ4JDIS3VX-k5OggslbwZmpJYYNGVqbcHA9wYROoz0UCzz9zLh7dQ9pHxqvjkTlVSAWF-AZKSD9fc4Icb30MhiEN7o" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-xl">
              <p className="text-white font-label-caps text-body-sm">The Essential Trousers</p>
              <p className="text-white/80 font-body-sm">$145.00</p>
            </div>
          </div>
          <div className="flex flex-col gap-lg">
            <div className="flex-1 relative overflow-hidden group cursor-pointer bg-surface-container">
              <img alt="Luxury Sandals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEsIc6PwShxfqf7ifu6E68be7cjt5VYDQ6bG6NNwJJYJ6ZIpQNB1Y8-qT804BYa85ZeRIQlloWIf0_h-oS3csyaYaXtz7IfhUrSq6A1ZoT6j3r3urZrQkOUbbU3fQmYhZDXLnrYYeu2dGf-oRdshw7N3nPP-cylMos0OptVljTeI1z4jLbf4UbCLnrnKC1x1dAhXUYIUHMe3d1rZD3wO8mGE5ZgiIbNBdbckKYlmYh90YhyDrRha6a64Xu4WT6PIN5EIbYWMG78bKp" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-lg">
                <p className="text-white font-label-caps text-body-sm">Heritage Sandals</p>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden group cursor-pointer bg-surface-container">
              <img alt="Fragrance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkMpc5rur-xXSDPoOTtVEHqNGn5F88-T8GuHtNOT2VopXWoZ7t21eym44V0CrHxQIk_3c15bV2e9FZwxrcfDhTIhcdcsH0Ck49eOeq88iZs6W_pfbQWGv3xFCqAG0E7IBYngPtAnjIwCHQto9Yp2eKKyq0KD6yyzxd_cW-EfLEhRJjiGgraphWnqDzAwlwpPH72gr0cI8mzHgmP16AWwexFsNQNgfAN9SXLtuZNHpLfm9XQLgp10z0RwHF9_O5vnZl6zPsaqPb0IaT" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-lg">
                <p className="text-white font-label-caps text-body-sm">Midnight Wood Eau de Parfum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
