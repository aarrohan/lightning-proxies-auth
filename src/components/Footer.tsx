import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex justify-center xl:justify-between items-center">
      <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/50">
        © 2024 Lightning Proxies. All rights reserved
      </p>

      <div className="hidden xl:flex items-center gap-3">
        <Link
          href={"/"}
          className="text-sm font-medium tracking-[-0.14px] text-primary/75 hover:text-accent duration-200"
        >
          Privacy Policy
        </Link>

        <span className="w-[3px] aspect-square bg-primary/75 rounded-full"></span>

        <Link
          href={"/"}
          className="text-sm font-medium tracking-[-0.14px] text-primary/75 hover:text-accent duration-200"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
