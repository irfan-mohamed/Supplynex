import darkLogo from "../Images/logo_white.PNG";
import lightLogo from "../Images/logo_dark.PNG";
import mobileLogo from "../Images/logo_white.PNG";

type BrandLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function BrandLogo({ variant = "dark", className = "" }: BrandLogoProps) {
  return (
    <picture className={`brand-logo-wrap ${className}`}>
      {variant === "dark" ? <source media="(max-width: 560px)" srcSet={mobileLogo} /> : null}
      <img
        className="brand-logo"
        src={variant === "dark" ? darkLogo : lightLogo}
        alt="Supplynex"
      />
    </picture>
  );
}
