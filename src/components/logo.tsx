import Image from "next/image";
import Link from "next/link";

import unswMatesLogo from "./UNSW_Mates_Logo.png";

type LogoProps = {
  href?: string;
  subtitle?: string;
  size?: "sm" | "md";
};

export function Logo({ href, subtitle: _subtitle, size = "md" }: LogoProps) {
  const widthClass = size === "sm" ? "w-[220px] sm:w-[250px]" : "w-full max-w-[520px]";
  const content = (
    <div className={widthClass}>
      <Image
        src={unswMatesLogo}
        alt="UNSW Mates"
        priority
        className="h-auto w-full"
        sizes={size === "sm" ? "250px" : "(max-width: 640px) 90vw, 520px"}
      />
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}
