import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Education from "@/components/Education";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Expertise />
      <FeaturedProjects />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}
