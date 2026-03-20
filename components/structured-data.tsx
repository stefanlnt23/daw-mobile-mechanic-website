export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://dawmobilemechanic.co.uk/#business",
    name: "DAW Mobile Mechanic",
    description:
      "DAW Mobile Mechanic covers Telford and around 20 miles beyond it. Services include servicing, MOT repairs, suspension, brakes, diagnostics, steering, exhausts, timing belts, and general mobile mechanic work.",
    url: "https://dawmobilemechanic.co.uk",
    telephone: "+447360078879",
    email: "dawmobilemechanic@outlook.com",
    image: "https://dawmobilemechanic.co.uk/placeholder-user.jpg",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Telford",
      addressRegion: "Shropshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6784,
      longitude: -2.4453,
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 52.6784,
          longitude: -2.4453,
        },
        geoRadius: "32187",
      },
      { "@type": "City", name: "Telford", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Wellington", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Shifnal", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
      { "@type": "City", name: "Newport", containedInPlace: { "@type": "AdministrativeArea", name: "Shropshire" } },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile mechanic services",
      itemListElement: [
        "Servicing",
        "MOT repairs",
        "Suspension",
        "Brakes",
        "Diagnostics",
        "Steering",
        "Exhausts",
        "Timing belts",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
    sameAs: ["https://wa.me/447360078879"],
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
          text: "DAW Mobile Mechanic is based in Telford and covers around 20 miles beyond it. If you are nearby and unsure, call or WhatsApp to check.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work at home or work addresses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Most work can be carried out at your home or workplace as long as the vehicle is safely accessible.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Call 07360 078879, send a WhatsApp message, or email dawmobilemechanic@outlook.com with the issue and your location.",
        },
      },
    ],
  }

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DAW Mobile Mechanic",
    url: "https://dawmobilemechanic.co.uk",
    description: "Mobile mechanic website for customers in and around Telford.",
    publisher: {
      "@id": "https://dawmobilemechanic.co.uk/#business",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
    </>
  )
}
