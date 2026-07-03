import type { Page } from "@/payload-types";
import { HighImpactHero } from "./hight-impact";
import { MediumImpactHero } from "./medium-impact";
import { LowImpactHero } from "./low-impact";



type Props = {
  hero: Page["hero"];
};

export function Hero({ hero }: Props) {
  switch (hero.type) {
    case "highImpact":
      return <HighImpactHero hero={hero} />;

    case "mediumImpact":
      return <MediumImpactHero hero={hero} />;

    case "lowImpact":
      return <LowImpactHero hero={hero} />;

    default:
      return null;
  }
}