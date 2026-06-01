import darkLogo from "../Images/logo_white.PNG";
import lightLogo from "../Images/logo_dark.PNG";

type BrandLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  return (
    <picture className={`brand-logo-wrap ${className}`}>
      <img
        className="brand-logo"
        src={variant === "dark" ? darkLogo : lightLogo}
        alt="Supplynex"
      />
    </picture>
  );
}
