import { PageIntro } from "@/components/PageIntro";
import { NeighborhoodSection } from "@/components/NeighborhoodSection";
import { LocationSection } from "@/components/PropertyMedia";
export default function NeighborhoodPage() {
  return (
    <>
      <PageIntro
        title="The neighbourhood"
        eyebrow="AT HOME IN YABA"
        text="Discover Lagos’ technology and creative hub, with established schools, places to meet and transport connections close by."
      />
      <NeighborhoodSection />
      <LocationSection />
    </>
  );
}
