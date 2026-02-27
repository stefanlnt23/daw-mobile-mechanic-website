export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://adlmobilemechanic.co.uk/#business",
    name: "ADL Mobile Mechanic",
    alternateName: "ADL Mobile Mechanic Shropshire",
    description:
      "Expert mobile mechanic serving Wem, Market Drayton & a 30-mile radius across Shropshire. Timing chain specialist, advanced diagnostics, full servicing, MOT prep, clutch & flywheel, suspension & brakes, and dealer PDI work at your home or workplace.",
    url: "https://adlmobilemechanic.co.uk",
    telephone: "+447426443009",
    image: "https://adlmobilemechanic.co.uk/images/aaron-fixv2.png",
    logo: "https://adlmobilemechanic.co.uk/images/adl-logo.png",
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
        name: "What areas does ADL Mobile Mechanic cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Wem, Market Drayton, Shrewsbury, Whitchurch, Oswestry, Newport, Telford, and all surrounding areas within a 30-mile radius across Shropshire and into Cheshire.",
        },
      },
      {
        "@type": "Question",
        name: "Do you come to my home or workplace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! ADL Mobile Mechanic comes to you — whether that's your home, workplace, or roadside. No need to visit a garage.",
        },
      },
      {
        "@type": "Question",
        name: "What services do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer timing chain replacement (Renault Trafic & Vauxhall Vivaro specialist), advanced diagnostics, full servicing & MOT preparation, suspension & brake repairs, clutch & flywheel replacement, and dealer pre-delivery inspection (PDI) work.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a mobile mechanic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply call Aaron on 07426 443009 or message via WhatsApp. We'll arrange a time that suits you and come to your location.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my check engine light is on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Do not keep driving. A check engine light could indicate serious engine issues. Pull over safely and call ADL Mobile Mechanic on 07426 443009 for a mobile diagnostic — Aaron comes to you wherever you are.",
        },
      },
    ],
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ADL Mobile Mechanic",
    url: "https://adlmobilemechanic.co.uk",
    description: "Expert mobile mechanic serving Shropshire",
    publisher: {
      "@id": "https://adlmobilemechanic.co.uk/#business",
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
