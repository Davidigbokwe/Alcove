import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import App from "@/App";
import assets from "@/data/original-assets.json";

afterEach(cleanup);
function open(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("Dedicated website pages", () => {
  it.each([
    ["/", "A little more room to belong."],
    ["/about-us/", "About Alcove Homes"],
    ["/properties/", "The residences"],
    ["/gallery/", "The gallery"],
    ["/contact-us/", "Contact us"],
    ["/neighbourhood/", "The neighbourhood"],
    ["/details/", "The details"],
    ["/floor-plans/", "Floor plans"],
    ["/property/3-bedroom-apartment-2/", "3 Bedroom Apartment"],
    ["/property/3-bedroom-maisonette/", "3 Bedroom Maisonette"],
    ["/property/4-bedroom-terrace/", "4 Bedroom Terrace"],
    ["/property/3-bedroom-penthouse/", "3 Bedroom Penthouse"],
  ])("renders its own page at %s", (path, title) => {
    open(path);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
    expect(document.title).toContain("Alcove Homes");
  });

  it("uses separate navigation URLs and closes the mobile menu on navigation", () => {
    open();
    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    const navigation = screen.getByRole("navigation", { name: "Main navigation" });
    expect(within(navigation).getByRole("link", { name: "About us" })).toHaveAttribute(
      "href",
      "/about-us/",
    );
    fireEvent.click(within(navigation).getByRole("link", { name: "About us" }));
    expect(
      screen.getByRole("heading", { level: 1, name: "About Alcove Homes" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(
      screen.queryByRole("heading", { level: 1, name: /room to belong/ }),
    ).not.toBeInTheDocument();
  });

  it("takes home search to the filtered properties page, then the property's own page", () => {
    open();
    fireEvent.change(screen.getByLabelText("Choose a home type"), {
      target: { value: "4 Bedroom Terrace" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Explore homes" }));
    expect(screen.getByRole("heading", { level: 1, name: "The residences" })).toBeInTheDocument();
    expect(screen.getAllByRole("article")).toHaveLength(1);
    fireEvent.click(screen.getByRole("link", { name: "4 Bedroom Terrace" }));
    expect(
      screen.getByRole("heading", { level: 1, name: "4 Bedroom Terrace" }),
    ).toBeInTheDocument();
    expect(screen.getByText("194 sqm")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Download plan" })).toHaveLength(3);
  });

  it("carries a property enquiry into the contact page", () => {
    open("/property/3-bedroom-maisonette/");
    fireEvent.click(screen.getByRole("link", { name: /Enquire about this home/ }));
    expect(screen.getByRole("heading", { level: 1, name: "Contact us" })).toBeInTheDocument();
    expect(screen.getByLabelText("I’m interested in")).toHaveValue("3 Bedroom Maisonette");
    expect(screen.getByLabelText("Phone number")).toBeRequired();
  });

  it("filters the full gallery into its original categories", () => {
    open("/gallery/");
    expect(screen.getByRole("status")).toHaveTextContent(`${assets.gallery.length} photographs`);
    fireEvent.click(screen.getByRole("button", { name: "Interior" }));
    const count = assets.gallery.filter((photo) => photo.category === "Interior").length;
    expect(screen.getByRole("status")).toHaveTextContent(`${count} photographs`);
    expect(screen.getByRole("button", { name: "Interior" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("updates the floor plan preview and download together", () => {
    open("/floor-plans/");
    fireEvent.click(screen.getByRole("button", { name: /4 Bedroom Terrace · Second floor/ }));
    expect(screen.getByRole("link", { name: "Download plan" })).toHaveAttribute(
      "href",
      "/floor-plans/4BR-Terrace-Second-Floor-1024x724.jpg",
    );
  });

  it("shows a real not-found page for unknown URLs", () => {
    open("/property/missing-home/");
    expect(screen.getByRole("heading", { level: 1, name: "Page not found" })).toBeInTheDocument();
  });
});
