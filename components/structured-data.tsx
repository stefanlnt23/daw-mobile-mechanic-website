export function StructuredData() {
  const siteUrl = "https://dawmobilemechanic.co.uk"
  const businessId = `${siteUrl}/#business`
  const googleMapsUrl = "https://maps.app.goo.gl/TNWxsrNMaq3E5wJi7"
  const serviceAreas = [
    "Telford",
    "Wellington",
    "Madeley",
    "Oakengates",
    "Shifnal",
    "Newport",
    "Ironbridge",
    "Broseley",
    "Bridgnorth",
    "Shropshire",
  ]
  const services = [
    "Mobile servicing",
    "MOT repairs",
    "Brakes and suspension repairs",
    "Car diagnostics",
    "Steering repairs",
    "Exhaust repairs",
    "Timing belt replacement",
  ]

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": businessId,
    name: "DAW Mobile Mechanic",
    description:
      "Mobile mechanic in Telford serving Telford and surrounding areas in Shropshire. On-site servicing, MOT repairs, brakes, suspension, diagnostics, steering, exhausts, timing belts, and general car repairs.",
    url: siteUrl,
    telephone: "+447360078879",
    email: "dawmobilemechanic@outlook.com",
    image: `${siteUrl}/placeholder-user.webp`,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer",
    slogan: "Broken Down? Call DAW.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brookes Ave., Overdale",
      addressLocality: "Telford",
      addressRegion: "Shropshire",
      postalCode: "TF3 5FP",
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
      ...serviceAreas.map((name) => ({
        "@type": "Place",
        name,
      })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.6784,
        longitude: -2.4453,
      },
      geoRadius: "32187",
    },
    knowsAbout: services,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile mechanic services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: serviceAreas.map((name) => ({
            "@type": "Place",
            name,
          })),
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
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+447360078879",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en-GB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "58",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://wa.me/447360078879",
      "https://www.facebook.com/profile.php?id=61576953417451",
      "https://www.instagram.com/dawmobilemechanic",
      googleMapsUrl,
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
    url: siteUrl,
    description: "Mobile mechanic website for customers in Telford and surrounding areas in Shropshire.",
    publisher: {
      "@id": businessId,
    },
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Mobile Mechanic Telford | DAW Mobile Mechanic",
    description:
      "Mobile mechanic in Telford for on-site servicing, diagnostics, brakes, suspension, MOT repairs, steering, exhausts, and timing belts.",
    isPartOf: {
      "@id": siteUrl,
    },
    about: {
      "@id": businessId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/header-img/hero-team.png`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}
