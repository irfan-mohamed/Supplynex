import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ComingSoonPage } from "../pages/ComingSoonPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";

const futurePages = [
  { path: "/for-brands", title: "For Brands" },
  { path: "/for-distributors", title: "For Distributors" },
  { path: "/how-it-works", title: "How It Works" },
  { path: "/roadmap", title: "Roadmap" },
  { path: "/resources", title: "Resources" },
  { path: "/login", title: "Login" },
  { path: "/early-access", title: "Join Early Access" },
  { path: "/about", title: "About Us" },
  { path: "/mission", title: "Our Mission" },
  { path: "/careers", title: "Careers" },
];

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {futurePages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<ComingSoonPage title={page.title} />}
          />
        ))}
      </Route>
    </Routes>
  );
}
