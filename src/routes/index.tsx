import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Products } from "@/components/site/Products";
import { Process } from "@/components/site/Process";
// import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S.V. AC Solutions — Premium AC, Electronics & Home Service in Hyderabad" },
      { name: "description", content: "AC installation & repair, refrigeration, washing machines, Smart TVs, water purifiers, packers & movers and certified second-hand appliances. 4+ years, 5,000+ happy customers." },
      { property: "og:title", content: "S.V. AC Solutions — Cooling. Care. Complete home solutions." },
      { property: "og:description", content: "One trusted team for every appliance in your home. Same-day service across Hyderabad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "S.V. AC Solutions",
        description: "Air Conditioning, Electronics & Home Service Company",
        telephone: "+916370978129",
        email: "venkyaircondiners1998@gmail.com",
        founder: "G. Srikanth Reddy",
        areaServed: "Hyderabad",
        priceRange: "₹₹",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <BrandMarquee />
        <WhyChoose />
        <Products />
        <Process />
        {/* <Gallery /> */}
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
