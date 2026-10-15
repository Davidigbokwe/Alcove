import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homes } from "@/data/property";
export function InquirySection({
  inquiryType,
  setInquiryType,
}: {
  inquiryType: string;
  setInquiryType: (value: string) => void;
}) {
  const [emailPrepared, setEmailPrepared] = useState(false);
  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Home enquiry${inquiryType ? ` — ${inquiryType}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nHome: ${inquiryType || "Not specified"}\n\n${message}`,
    );
    setEmailPrepared(true);
    window.location.href = `mailto:info@alcovehomesng.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="inquiry-section" id="enquire">
      <div className="inquiry-copy">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          Come find
          <br />
          your <em>place.</em>
        </h2>
        <p>
          A conversation is a lovely place to start. Tell us what you’re looking for and our team
          will be in touch.
        </p>
        <div className="contact-options">
          <a href="tel:+2348061995277">
            <span className="contact-icon">
              <ArrowUpRight size={17} />
            </span>
            <span>
              <small>GIVE US A CALL</small>
              <strong>+234 806 199 5277</strong>
            </span>
          </a>
          <a href="mailto:info@alcovehomesng.com">
            <span className="contact-icon">
              <ArrowUpRight size={17} />
            </span>
            <span>
              <small>DROP US A NOTE</small>
              <strong>info@alcovehomesng.com</strong>
            </span>
          </a>
        </div>
        <div className="address-line">
          <MapPin aria-hidden="true" size={17} />
          <span>
            19 Ishola St, Adekunle, Yaba
            <br />
            Lagos, Nigeria
          </span>
        </div>
      </div>
      <form className="inquiry-form" onSubmit={submitInquiry}>
        <span className="form-eyebrow">LET’S TALK ABOUT HOME</span>
        <label htmlFor="inquiry-name">Your name</label>
        <input
          id="inquiry-name"
          name="name"
          autoComplete="name"
          placeholder="How should we call you?"
          required
        />
        <label htmlFor="inquiry-email">Email address</label>
        <input
          id="inquiry-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
        <label htmlFor="inquiry-phone">Phone number</label>
        <input
          id="inquiry-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+234"
          required
        />
        <label htmlFor="inquiry-type">I’m interested in</label>
        <div className="form-select-wrap">
          <select
            id="inquiry-type"
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
          >
            <option value="">Help me find the right home</option>
            {homes.map((home) => (
              <option key={home.type}>{home.type}</option>
            ))}
          </select>
          <ChevronDown aria-hidden="true" size={17} />
        </div>
        <label htmlFor="inquiry-message">
          Anything else we should know? <span>Optional</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={3}
          placeholder="A question, a wish, or just hello…"
        />
        <Button type="submit" className="form-submit">
          Prepare email enquiry <ArrowRight aria-hidden="true" size={17} />
        </Button>
        <p className="email-help">
          Opens your email app with your details. Send the email there to complete your enquiry, or
          call our team.
        </p>
        {emailPrepared && (
          <p role="status" className="email-help">
            Your email draft is ready. If no email app opened, please call +234 806 199 5277.
          </p>
        )}
        <p className="form-footnote">
          <Check aria-hidden="true" size={13} /> Your details are only used to respond to your
          enquiry.
        </p>
      </form>
    </section>
  );
}
