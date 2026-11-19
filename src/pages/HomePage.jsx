import { Hero } from "../features/home/Hero";
import { IdentityStrip } from "../features/home/IdentityStrip";
import { About } from "../features/home/About";
import { MissionVision } from "../features/home/MissionVision";

export function HomePage() {
  return (
    <>
      <Hero />
      <IdentityStrip />
      <About />
      <MissionVision />
    </>
  );
}