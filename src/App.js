import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Products } from "./components/Products";
import { Founders } from "./components/Founders";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProductDetail } from "./components/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/pages/ContactUs";
import FoundersPage from "./components/pages/FoundersPage";

const Landing = () => (
  <main>
    <Hero />
    <Marquee />
    <Products />
    <Founders />
    <Contact />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className="App grain min-h-screen bg-white text-[#1a1a1a]"
        data-testid="app-root"
      >
        <Toaster
          position="bottom-right"
          theme="light"
          toastOptions={{
            style: {
              background: "#ffffff",
              border: "1px solid rgba(192,142,58,0.4)",
              color: "#0a2540",
              borderRadius: 0,
              fontFamily: "Manrope, sans-serif",
              letterSpacing: "0.02em",
            },
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/products/cpvc-inspection-chamber"
            element={<ProductDetail />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/founders" element={<FoundersPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
