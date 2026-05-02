import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import Classes from "@/components/Classes";
import ClassVideos from "@/components/ClassVideos";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Locations from "@/components/Locations";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Community />
        <Classes />
        <ClassVideos />
        <Schedule />
        <Pricing />
        <Locations />
        <CTAFinal />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}