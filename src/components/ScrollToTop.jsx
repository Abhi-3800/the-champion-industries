import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on every route change (unless a hash is present, which we let handle itself).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
};

export default ScrollToTop;
