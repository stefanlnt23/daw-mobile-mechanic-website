export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://adlmechanic.uk/#business",
    name: "ADL Mobile Mechanic",
    alternateName: "ADL Mobile Mechanic Shropshire",
    description:
      "Expert mobile mechanic serving Wem, Market Drayton & a 30-mile radius across Shropshire. Timing chain specialist, advanced diagnostics, full servicing, MOT prep, clutch & flywheel, suspension & brakes, and dealer PDI work at your home or workplace.",
    url: "https://adlmechanic.uk",
    telephone: "+447426443009",
    image: "https://adlmechanic.uk/images/aaron-fixv2.png",
    logo: "https://adlmechanic.uk/images/adl-logo.png",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 52.8567,
          longitude: -2.7164,
        },
        geoRadius: "48280",
      },
      { "@type": "City", name: "Wem", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Market Drayton", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Shrewsbury", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Whitchurch", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Oswestry", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Newport", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Telford", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Nantwich", containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
      { "@type": "City", name: "Crewe", containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" } },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wem",
      addressRegion: "Shropshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.8567,
      longitude: -2.7164,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile Mechanic Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Timing Chain Replacement",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Timing Chain Replacement",
                description:
                  "Specialist timing chain replacement for Renault Trafic, Vauxhall Vivaro, and similar vehicles. Factory-grade parts and precision installation at your home or workplace.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Advanced Diagnostics",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Advanced Vehicle Diagnostics",
                description:
                  "Dealer-level diagnostic equipment to trace stubborn faults. From failed starter motors to intermittent electrical gremlins.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Full Servicing & MOT Prep",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Servicing & MOT Preparation",
                description:
                  "Interim, full, and major services. Oil & filter changes, fluid top-ups, belt checks, and full MOT preparation.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Suspension & Brakes",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Suspension & Brake Repair",
                description:
                  "Expert brake and suspension repairs. Discs, pads, springs, shocks, and full geometry checks.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Clutch & Flywheel",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clutch & Flywheel Replacement",
                description:
                  "Complete clutch kit and dual-mass flywheel replacements on-site.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Dealer PDI Work",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Dealer Pre-Delivery Inspection",
                description:
                  "Pre-delivery inspection services for motor traders. On-site inspections so stock is road-ready.",
              },
            },
          ],
        },
      ],
    },
    sameAs: [
      "https://wa.me/447426443009",
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're based in Wem and cover a 30-mile radius across Shropshire and into Cheshire. That includes Shrewsbury, Market Drayton, Whitchurch, Oswestry, Telford, Newport, Nantwich, and Crewe. If you're unsure, just give Aaron a call.",
        },
      },
      {
        "@type": "Question",
        name: "Do you need space on my driveway?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard parking space is usually enough. We bring everything we need in the van. If access is tight, we can discuss options when you book — we're flexible.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just call or WhatsApp Aaron on 07426 443009. We'll have a quick chat about the issue, arrange a time that suits you, and come to your location.",
        },
      },
      {
        "@type": "Question",
        name: "What are your prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices depend on the job — diagnostics start from £40, servicing and repairs are quoted individually. You'll always get a clear, upfront quote before any work begins. No hidden extras.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply the parts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we source quality parts from trusted suppliers at trade prices, so you don't need to worry about finding them yourself. We always use OE-equivalent or genuine parts.",
        },
      },
      {
        "@type": "Question",
        name: "How long do repairs usually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most diagnostics and minor repairs are done within an hour or two. Bigger jobs like timing chains or clutch replacements are typically a full day. We'll give you a time estimate when we quote.",
        },
      },
      {
        "@type": "Question",
        name: "What if it rains?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work in all weather — the van carries gazebos and covers for wet conditions. Unless it's genuinely unsafe, rain won't delay your repair.",
        },
      },
      {
        "@type": "Question",
        name: "Can you work on any vehicle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work on most makes and models — cars, vans, and light commercial vehicles. We're specialists in Renault Trafic and Vauxhall Vivaro timing chains, but handle everything from Fords to BMWs.",
        },
      },
    ],
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ADL Mobile Mechanic",
    url: "https://adlmechanic.uk",
    description: "Expert mobile mechanic serving Shropshire",
    publisher: {
      "@id": "https://adlmechanic.uk/#business",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  )
}
