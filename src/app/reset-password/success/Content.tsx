"use client";
import { useSearchParams } from "next/navigation";

export default function Content() {
  const searchParams = useSearchParams();

  return (
    <p className="py-2 px-6 border border-white-dark bg-off-white rounded-lg text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-center">
      {searchParams.get("email") ?? "--"}
    </p>
  );
}
