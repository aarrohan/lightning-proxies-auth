import Link from "next/link";

export default function Footer({ isVertical }: { isVertical?: boolean }) {
  return (
    <div
      className={`mt-14 w-full pb-6 flex ${
        isVertical ? "flex-col" : ""
      } justify-center xl:justify-between items-center gap-3`}
    >
      <p
        className={`${
          isVertical ? "order-2" : ""
        } text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/50`}
      >
        © 2024 Lightning Proxies. All rights reserved
      </p>

      <div
        className={`${
          isVertical ? "order-1" : ""
        } hidden xl:flex items-center gap-3`}
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_WEB_URL}/legal/privacy-policy`}
          target="_blank"
          className="text-sm font-medium tracking-[-0.14px] text-primary/75 hover:text-accent duration-200"
        >
          Privacy Policy
        </Link>

        <span className="w-[3px] aspect-square bg-primary/75 rounded-full"></span>

        <Link
          href={`${process.env.NEXT_PUBLIC_WEB_URL}/legal/terms-of-service`}
          target="_blank"
          className="text-sm font-medium tracking-[-0.14px] text-primary/75 hover:text-accent duration-200"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
