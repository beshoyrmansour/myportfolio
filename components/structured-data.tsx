import { SITE_URL, SITE_NAME } from "@/lib/site";

/**
 * JSON-LD structured data (Person + WebSite) for rich search results.
 * Rendered server-side as a static <script> in the document.
 */
export function StructuredData() {
  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: "Beshoy Mansour",
      url: SITE_URL,
      image: `${SITE_URL}/portrait.png`,
      jobTitle: "Lead Frontend Developer & UI/UX Designer",
      email: "mailto:beshoy.r.mansour@gmail.com",
      sameAs: [
        "https://github.com/beshoyrmansour",
        "https://www.linkedin.com/in/beshoy-r-mansour/",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "UI/UX Design",
        "Frontend Architecture",
        "React Native",
        "TailwindCSS",
      ],
      worksFor: { "@type": "Organization", name: "Ejada Systems" },
      address: { "@type": "PostalAddress", addressCountry: "EG" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: `${SITE_NAME} Portfolio`,
      url: SITE_URL,
      inLanguage: ["en", "ar"],
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
