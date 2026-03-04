import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import RoutinesSection from '@/components/RoutinesSection';
import NutritionSection from '@/components/NutritionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <> 
      <HeroSection />
      <OverviewSection />
      <RoutinesSection />
      <NutritionSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}