import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import twoFAImg from "@/assets/images/2fa.svg";
import Link from "next/link";
import Form from "./Form";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Two-Factor Authentication (2FA)",
  description:
    "Secure your account with OTP-based two-factor authentication. Add an extra layer of protection to your login process.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/login/2fa`,
    title: "Two-Factor Authentication (2FA)",
    description:
      "Secure your account with OTP-based two-factor authentication. Add an extra layer of protection to your login process.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function TwoFA({
  params,
}: {
  params: { twoFactorToken: string };
}) {
  if (!params.twoFactorToken) return redirect("/login");

  return (
    <main>
      <section className="grid xl:grid-cols-2">
        <div className="h-[100svh] py-5 pl-5 hidden xl:block">
          <Slider />
        </div>

        <div className="relative h-[100svh] xl:py-5 xl:pr-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={twoFAImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Authenticate Login
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Please enter your authentication code to gain access
              </p>

              <Form twoFactorToken={params.twoFactorToken} />

              <Link
                href={"/"}
                className="mb-3 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75"
              >
                Facing other issues?{" "}
                <span className="font-semibold text-accent">
                  Contact Support
                </span>
              </Link>
            </div>

            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
}
