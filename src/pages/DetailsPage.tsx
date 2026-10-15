import { PageIntro } from "@/components/PageIntro";
import { AmenitiesSection } from "@/components/AmenitiesSection";
export default function DetailsPage() {
  return (
    <>
      <PageIntro
        title="The details"
        eyebrow="COMFORT, BUILT IN"
        text="Explore the amenities, finishes and shared spaces that make everyday life at Alcove Homes feel considered."
      />
      <AmenitiesSection />
    </>
  );
}
