import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Categories from "@/components/sections/categories";
import GamesSlider from "@/components/sections/games-slider";
import BonusesSection from "@/components/sections/bonuses";
import FeaturesSection from "@/components/sections/features";
import TelegramPromo from "@/components/sections/telegram-promo";
import LoginInfo from "@/components/sections/login-info";
import RegistrationGuide from "@/components/sections/registration-guide";
import FAQ from "@/components/sections/faq";
import ReviewsSection from "@/components/sections/reviews";
import SecuritySection from "@/components/sections/security";
import Footer from "@/components/sections/footer";
import PromoModal from "@/components/sections/promo-modal";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero — primary value proposition */}
        <Hero />

        {/* Game categories overview */}
        <Categories />

        {/* Interactive games slider */}
        <GamesSlider />

        {/* Bonus program — step by step */}
        <BonusesSection />

        {/* Why us — feature cards */}
        <FeaturesSection />

        {/* Telegram channel promo */}
        <TelegramPromo />

        {/* Login guide */}
        <LoginInfo />

        {/* Registration guide */}
        <RegistrationGuide />

        {/* FAQ */}
        <FAQ />

        {/* Player reviews */}
        <ReviewsSection />

        {/* Security & responsible gaming */}
        <SecuritySection />
      </main>

      <Footer />

      {/* Promo modal — fires after 2s */}
      <PromoModal />
    </>
  );
}
