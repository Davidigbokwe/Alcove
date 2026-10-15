import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import { PageMeta } from "./components/PageMeta";
import AboutUsPage from "./pages/AboutUsPage";
import PropertiesPage from "./pages/PropertiesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ApartmentPage from "./pages/ApartmentPage";
import MaisonettePage from "./pages/MaisonettePage";
import TerracePage from "./pages/TerracePage";
import PenthousePage from "./pages/PenthousePage";
import NeighborhoodPage from "./pages/NeighborhoodPage";
import DetailsPage from "./pages/DetailsPage";
import FloorPlansPage from "./pages/FloorPlansPage";
import NotFoundPage from "./pages/NotFoundPage";
export default function App() {
  return (
    <>
      <PageMeta />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="properties" element={<PropertiesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="property/3-bedroom-apartment-2" element={<ApartmentPage />} />
          <Route path="property/3-bedroom-maisonette" element={<MaisonettePage />} />
          <Route path="property/4-bedroom-terrace" element={<TerracePage />} />
          <Route path="property/3-bedroom-penthouse" element={<PenthousePage />} />
          <Route path="neighbourhood" element={<NeighborhoodPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="floor-plans" element={<FloorPlansPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
