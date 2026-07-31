import Hero from "./components/Hero/Hero";
import Description from "./components/Sections/Description/Description";
import Faq from "./components/Sections/faq/Faq";
import Functions from "./components/Sections/Functions/Functions";
import HowItWork from "./components/Sections/HowItWork/HowItWork";
import Pricing from "./components/Sections/Pricing/Pricing";

export default function Home() {
  return (
    <main className="">
      <div className="bg-surface p-4">
        <Hero />
      </div>
      <Description />
      <Functions />
      <HowItWork />
      <Pricing />
      <Faq />
    </main>
  );
}
