# LUMEN — Premium Sanitaryware Marketing Website

## Problem Statement
Launch a responsive marketing website for a new sanitary products brand with a metallic theme. Site must include:
- Navbar with Home, Products, Founders, Contact Us
- Footer with physical store address, social media links, copyright
- Strong visuals, designs, and effects

## User Choices
- Brand name: LUMEN (placeholder)
- Palette: Chrome/silver with deep charcoal (industrial luxury)
- Product categories: faucets, sinks, showers, toilets, bathtubs, accessories — all with samples
- Founders: 2 placeholder founders with sample bios
- Contact form: UI only with success toast (no email backend)

## Architecture
- React 19 SPA (single-page, anchor-based navigation)
- FastAPI + Mongo (template, untouched — no backend needed for current scope)
- Framer Motion for reveals, sonner for toasts, lucide-react for icons
- Custom Tailwind theme with `metallic-text`, `chrome-sheen`, `brushed-steel`, grain overlay

## Implemented (2025-12)
- Sticky glassmorphism Navbar with scroll-aware blur, mobile hamburger menu, 01-04 numbered links
- Hero: full-screen monochrome image with chrome orb, vertical eyebrow, "Forged In Precision" wordmark, stats strip
- Brushed marquee strip of material finishes
- Products: asymmetric bento grid (6 categories) with hover reveal, lazy images, grayscale→color
- Founders: 2 split-screen cards with portrait + bio + social links
- Contact: 2-col layout (info + form). Sonner success toast, validation
- Footer: huge wordmark, address, navigate links, newsletter form, 5 socials, copyright

## Not Implemented (P1 backlog)
- Actual email submission (Resend/SendGrid)
- Product detail pages / pricing
- Showroom locator / map embed
- CMS / admin to edit products
- i18n
- Cart / e-commerce checkout

## Next Tasks
- Wire contact form to a backend `/api/contact` endpoint when email integration is requested
- Add product detail pages with specifications
