// Renders the official Champion Industries logo (cherub crest + INDUSTRIES wordmark).
// By default, sizes to a square box; pass `width` to size by width with auto height
// (useful in marketing/hero contexts where the logo's natural aspect should be preserved).
import championLogo from '../images/champion-industries-logo.jpg';
export const ChampionLogo = ({ size = 48, width, className = "", showWordmark = true }) => {
  const src = championLogo;

  const style = width
    ? { width, height: "auto", objectFit: "contain" }
    : { width: size, height: size, objectFit: "contain" };

  return (
    <img
      src={src}
      alt="Champion Industries"
      style={style}
      className={`select-none ${className}`}
      draggable={false}
      data-show-wordmark={showWordmark ? "true" : "false"}
    />
  );
};

export default ChampionLogo;
