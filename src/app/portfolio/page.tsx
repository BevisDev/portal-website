import ScrollToTop from "@/components/scroll-to-top";
import NavBar from "./navbar";
import { Footer } from "./footer";
import HeroSection from "./components/hero-section";

export default function PortfolioPage() {
  return (
    <>
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <NavBar />
        <HeroSection />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
