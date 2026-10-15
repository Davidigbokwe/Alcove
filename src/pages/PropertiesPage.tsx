import { PageIntro } from "@/components/PageIntro";
import { Residences } from "@/components/Residences";
export default function PropertiesPage() {
  return (
    <>
      <PageIntro
        title="The residences"
        eyebrow="FOUR WAYS TO CALL IT HOME"
        text="Explore our apartments, maisonettes, terraces and penthouses. Open a residence to see its own specifications, photographs and plans."
      />
      <Residences />
    </>
  );
}
