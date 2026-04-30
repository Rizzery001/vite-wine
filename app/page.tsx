import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Producers from "@/components/Producers";
import MapSection from "@/components/MapSection";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Producers />
      <MapSection />
      <JoinForm />
      <Footer />
    </main>
  );
}
