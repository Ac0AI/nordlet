// Unsplash images - free for commercial use
// All images are motorhome/campervan lifestyle shots

export const IMAGES = {
  // Real photo: motorhome in a cold nordic mountain landscape
  hero: "https://images.unsplash.com/photo-1549194898-60fd030ecc0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzczMTcwNTU4fA&ixlib=rb-4.1.0&q=80&w=1600",
  // Product section: Motorhome interior - cozy, premium
  interior: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop&q=80",
  // Local lifestyle photo: morning coffee beside the motorhome in Nordic nature
  road: "/images/photo_2026-03-10_20-39-08.jpg",
  // Nature camping: Motorhome in nature
  nature: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop&q=80",
  // Hero-banner (tvådelad): stämningsbild nordisk skog (vänster) + riktigt
  // produktfoto (höger, IMAGES.productFront). Den tidigare AI-renderade
  // hero-product.png används inte längre.
  heroForest: "/images/hero-forest.png",
  // Riktiga produktfoton från leverantören (ersätter de tidigare mockuparna)
  productFront: "/images/products/a73eb482e69db1413051eec47614edf2.png", // 3/4-vy, lock stängt (hero)
  productFrontCutout: "/images/products/frihetstoan-hero-v4.png", // frilagd produktbild (transparent bakgrund, levererad av ägaren). Serveras lossless (unoptimized) så kanten inte ringar i WebP. Versionerat filnamn = cache-bust.
  productSide: "/images/products/06403af0d7a8673f549f5d4aa192c629.png", // ren sidoprofil
  productDimensions: "/images/products/4d146aeeb7bd2624355dcf7d371c42f6.png", // utdragen uppsamlingslåda
  productDetail: "/images/products/7188ca89abd25eb1c85082ebab82a95d.png", // öppet lock med refill-/påsring
  productStraight: "/images/products/f691e46906b066405a4e15d5b0605a70.png", // rakt framifrån
  productStand: "/images/products/7788c102fd9a82094723b35bb786ed39.png", // justerbart stativ (tillbehör)
  // Obs: bilderna för "Så fungerar det" (steg 1-4) definieras i CHAPTERS i constants.ts.
};
