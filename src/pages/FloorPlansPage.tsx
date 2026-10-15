import { PageIntro } from "@/components/PageIntro";
import { FloorPlans } from "@/components/FloorPlans";
export default function FloorPlansPage() {
  return (
    <>
      <PageIntro
        title="Floor plans"
        eyebrow="SPACE FOR EVERYDAY LIVING"
        text="Compare the original development layouts, view each level and download a plan to take a closer look."
      />
      <FloorPlans />
    </>
  );
}
