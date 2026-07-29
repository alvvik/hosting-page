import Hero from "./components/Hero/Hero";
import Description from "./components/Sections/Description/Description";
import Functions from "./components/Sections/Functions/Functions";

export default function Home() {
  return (
    <main className="">
      <div className="bg-surface p-4">
        <Hero />
      </div>
      <Description />
      <Functions />
    </main>
  );
}
