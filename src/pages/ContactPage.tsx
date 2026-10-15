import { useSearchParams } from "react-router-dom";
import { InquirySection } from "@/components/InquirySection";
import { LocationSection } from "@/components/PropertyMedia";
import { PageIntro } from "@/components/PageIntro";
import { homes } from "@/data/property";
export default function ContactPage() {
  const [params, setParams] = useSearchParams();
  const chosen = params.get("property") || "";
  const inquiryType = homes.some((home) => home.type === chosen) ? chosen : "";
  return (
    <>
      <PageIntro
        title="Contact us"
        eyebrow="YOUR NEXT CHAPTER STARTS HERE"
        text="Ask about a home, confirm availability or arrange a visit. Our sales team is here to help."
      />
      <InquirySection
        inquiryType={inquiryType}
        setInquiryType={(value) => setParams(value ? { property: value } : {}, { replace: true })}
      />
      <LocationSection />
    </>
  );
}
