import ProductViews from "../images/product-views.jpg";
import HomePageView from "../images/home-page-view.jpg";
import MainView from "../images/main-view.jpg";
import founderImage from "../images/gopal_director.png";
import founderImage2 from "../images/mrigank_manager.png";

export const BRAND = {
  name: "CHAMPION",
  tagline: "Engineered For Performance",
  full: "INDUSTRIES",
  fullName: "Champion Industries",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home", testid: "nav-home-link" },
  { label: "Product", href: "/products/pvc-inspection-chamber", testid: "nav-products-link" },
  { label: "Founders", href: "/founders", testid: "nav-founders-link" },
  { label: "Contact Us", href: "/contact-us", testid: "nav-contact-link" },
];

// Single hero product
export const HERO_PRODUCT = {
  id: "pvc-inspection-chamber",
  slug: "pvc-inspection-chamber",
  category: "pvc Drainage",
  name: "pvc Drainage Inspection Chamber",
  tagline: "India's First Patented pvc Drainage Inspection Chamber",
  code: "CIC-2026",
  shortDescription:
    "Engineered for efficient drainage and long-term performance. Ensures smooth water flow, prevents backflow, and simplifies maintenance.",
  longDescription:
    "Champion's patented pvc Inspection Chamber is the new benchmark for residential, commercial and industrial drainage. Built from high-grade Chlorinated Polyvinyl Chloride with pre-installed backflow valves, an inbuilt slope and a leakproof body — it eliminates the failures of conventional brick-and-mortar chambers and outdated PVC alternatives.",
  finish: "pvc · Beige",
  coverImage: HomePageView,
  featuresPage:
    "https://customer-assets.emergentagent.com/job_d429fb85-29b7-4151-93c1-1f5d43f25a9f/artifacts/8jgjv8nc_8a827feb-c95e-4b33-8ef7-d5512f1f6218.jpeg",
  viewsPage: ProductViews,
  homeImage: MainView,
};

export const FEATURES = [
  { icon: "Wrench", title: "Easy Application & Installation", body: "Designed for quick and convenient installation, reducing labor effort and on-site complications." },
  { icon: "Droplets", title: "Optimized Water Flow", body: "Large-sized inlet and outlet openings ensure smooth and efficient drainage with minimal blockage risk." },
  { icon: "ShieldCheck", title: "Pre-Installed Backflow Valves", body: "Integrated backflow valves help prevent insects, reptiles and foul gases from entering the drainage system while also reducing the chances of water logging." },
  { icon: "Triangle", title: "Inbuilt Slope Design", body: "Smart internal slope design supports faster and more effective water flow." },
  { icon: "Settings", title: "Customizable Configurations", body: "Inlet and outlet arrangements can be assembled according to site-specific drainage requirements." },
  { icon: "Shield", title: "Leakproof & Durable Construction", body: "High-quality pvc construction provides long-term durability and leakproof performance, helping avoid future maintenance and repair costs." },
  { icon: "Clock", title: "Quick Assembly Procedure", body: "Simple assembly system saves valuable time at construction sites and improves installation efficiency." },
];

export const WHY_CHAMPION = [
  "Patented innovative design",
  "Strong and durable pvc material",
  "Low maintenance solution",
  "Efficient drainage performance",
  "Suitable for residential, commercial, and industrial applications",
  "Cost-effective long-term investment",
];

export const APPLICATIONS = [
  { icon: "Home", label: "Residential Buildings" },
  { icon: "Building2", label: "Commercial Complexes" },
  { icon: "Factory", label: "Industrial Projects" },
  { icon: "Trees", label: "Villas & Apartments" },
  { icon: "HardHat", label: "Construction Sites" },
  { icon: "Droplet", label: "Drainage Infrastructure" },
];

export const TECH_SPECS = [
  { label: "Product Name", value: "pvc Drainage Inspection Chamber" },
  { label: "Material", value: "pvc (Chlorinated Polyvinyl Chloride)" },
  { label: "Color", value: "Beige" },
  { label: "Inlet / Outlet Size", value: "110 mm / 110 mm (Standard)" },
  { label: "Backflow Valves", value: "Pre-Installed (Multiple)" },
  { label: "Design", value: "Inbuilt Slope for efficient drainage" },
  { label: "Installation", value: "Easy and quick" },
  { label: "Application", value: "Internal drainage & sewer systems" },
  { label: "Customisation", value: "Inlet / Outlet can be configured as per site requirement" },
  { label: "Patent", value: "India's First Patented pvc Drainage Inspection Chamber" },
];

export const PRODUCT_VIEWS = [
  { label: "Top View" },
  { label: "Front View" },
  { label: "Internal View" },
  { label: "Left Isometric View" },
  { label: "Right Isometric View" },
  { label: "Back View" },
];

export const FOUNDERSDATA = [
  {
    name: "Gopal Krishna Sharma",
    role: "Director",
    bio:
      "Established in 1988, starting as a small family owned manufacturing firm, products ranging from spray pumps to agricultural barrells, sanitary fittings to cycle pumps. Had a vision with this product, to prevent a problem that everyone faces, and protect people's investment.",
    url: founderImage,
    quote: "Built to outlast the building.",
  },
  {
    name: "Mrigank Sharma",
    role: "General Manager",
    bio:
      "Graduated from Melbourne Australia, majoring in accounting. With over 14 years of experience in varied industries, managing production, logistics, warehousing and distribution, working alongside some of the largest companies in Oceania..",
    url: founderImage2,
    quote: "Engineered tolerance is the only acceptable tolerance.",
  },
];

export const ADDRESS = {
  line1: "Gali Kartar Palace,",
  line2: "Opposite Khanna Packers,",
  line3: "Amritsar, 143001, India",
  phone: "+91 62802-45646",
  website: "www.thechampionindustries.com",
  email: "info@thechampionindustries.com",
  hours: "Mon — Sat · 10:00 AM to 7:00 PM",
};

export const STATS = [
  { value: "01", label: "India's First Patented Chamber" },
  { value: "160mm", label: "Standard Inlet / Outlet" },
  { value: "100%", label: "Leakproof pvc Body" },
  { value: "6+", label: "Configurable Ports" },
];

export const MARQUEE_ITEMS = [
  "Patented pvc",
  "Backflow Protection",
  "Leakproof Body",
  "Inbuilt Slope",
  "Inspection Chamber",
  "Made In India",
  "Engineered For Performance",
];
