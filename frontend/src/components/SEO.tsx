import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  name?: string;
  type?: string;
  url?: string;
  image?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  name = "Come Again Tours and Travels",
  type = "website",
  url = "https://comeagaintoursandtravels.com",
  image = "/images/logo.webp",
  schema,
  canonical,
}) => {
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Come Again Tours and Travels",
    "image": "https://comeagaintoursandtravels.com/images/logo.webp",
    "url": "https://comeagaintoursandtravels.com",
    "telephone": "+256-774-243-747",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 12 Kampala Road",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "postalCode": "00256",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.3136,
      "longitude": 32.5811
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48",
      "bestRating": "5"
    }
  };

  const schemasToRender = schema 
    ? (Array.isArray(schema) ? [defaultOrganizationSchema, ...schema] : [defaultOrganizationSchema, schema])
    : [defaultOrganizationSchema];

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph tags (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={name} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) for Rich Snippets */}
      {schemasToRender.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
