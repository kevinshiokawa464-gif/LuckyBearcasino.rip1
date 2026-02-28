import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import CategoriesSection from "@/components/sections/categories";
import GameCarousel from "@/components/sections/game-carousel";
import Bonuses from "@/components/sections/bonuses";
import Features from "@/components/sections/features";
import TelegramBot from "@/components/sections/telegram-bot";
import FAQSection from "@/components/sections/faq";
import ReviewsSection from "@/components/sections/reviews";
import Footer from "@/components/sections/footer";
import AntiBotModal from "@/components/sections/anti-bot-modal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05080f] text-white">
      <AntiBotModal />
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <GameCarousel />
        <Bonuses />
        <Features />
        <TelegramBot />
        <FAQSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
