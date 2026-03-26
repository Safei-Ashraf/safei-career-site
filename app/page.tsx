import { PortfolioShell } from "@/components/portfolio-shell";
import {
  hasProductionSiteUrl,
  profileData,
  publicProfileLinks,
  seoDescription,
  seoSummary,
  siteName,
  siteUrl
} from "@/lib/site-data";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": hasProductionSiteUrl ? `${siteUrl}#person` : undefined,
        name: profileData.person.name,
        jobTitle: profileData.person.title,
        description: seoDescription,
        url: hasProductionSiteUrl ? siteUrl : undefined,
        worksFor: {
          "@type": "Organization",
          name: "noon.com"
        },
        knowsLanguage: ["Arabic", "English", "German"],
        knowsAbout: [
          "Frontend engineering",
          "Storefront and discovery",
          "Next.js",
          "React",
          "TypeScript",
          "Commerce UX",
          "Platform modernization",
          "AI-assisted development"
        ],
        sameAs: publicProfileLinks.length > 0 ? publicProfileLinks : undefined
      },
      {
        "@type": "WebSite",
        "@id": hasProductionSiteUrl ? `${siteUrl}#website` : undefined,
        name: `${siteName} Career Site`,
        url: hasProductionSiteUrl ? siteUrl : undefined,
        description: seoSummary,
        inLanguage: "en"
      },
      {
        "@type": "WebPage",
        "@id": hasProductionSiteUrl ? `${siteUrl}#webpage` : undefined,
        name: `${profileData.person.name} | ${profileData.person.title}`,
        url: hasProductionSiteUrl ? siteUrl : undefined,
        description: seoDescription,
        isPartOf: hasProductionSiteUrl ? { "@id": `${siteUrl}#website` } : undefined,
        about: hasProductionSiteUrl ? { "@id": `${siteUrl}#person` } : undefined,
        inLanguage: "en"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <PortfolioShell />
    </>
  );
}
