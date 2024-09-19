import Features from "./Features";
import Hero from "./Hero";
import HowWeWork from "./HowWeWork";

export default function LandingPage() {
  return (
    // {/* <main className="row-start-2 flex flex-col items-start gap-8 place-self-start justify-self-start sm:items-start"> */}
    <main>
      <Hero />
      <Features />
      <HowWeWork />
    </main>
  );
}
