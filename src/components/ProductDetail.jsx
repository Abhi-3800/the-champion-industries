import { ProductDetailHero } from "./productDetail/ProductDetailHero";
import { ProductFeatures } from "./productDetail/ProductFeatures";
import { ProductViews } from "./productDetail/ProductViews";
import { ProductApplications } from "./productDetail/ProductApplications";
import { ProductWhyAndSpecs } from "./productDetail/ProductWhyAndSpecs";
import { ProductCTA } from "./productDetail/ProductCTA";

export const ProductDetail = () => (
  <main
    className="relative bg-white text-[#0a2540]"
    data-testid="product-detail-page"
  >
    <ProductDetailHero />
    <ProductFeatures />
    <ProductViews />
    <ProductApplications />
    <ProductWhyAndSpecs />
    <ProductCTA />
  </main>
);

export default ProductDetail;
