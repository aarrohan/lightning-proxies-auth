import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import emailVerifiedImg from "@/assets/images/email-verified.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Verified Successfully",
  description:
    "Your email address has been successfully verified. You can now proceed to log in and use your account.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/email-verified`,
    title: "Email Verified Successfully",
    description:
      "Your email address has been successfully verified. You can now proceed to log in and use your account.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function TwoFA() {
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
                src={emailVerifiedImg}
                alt=""
                width={1000}
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Email Verified
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Success! Your email is verified now. <br /> You may proceed to
                login into your account
              </p>

              <Link
                href={"/"}
                className="active:scale-95 mb-6 w-full max-w-[465px] py-2.5 hover:!ring-4 hover:!ring-accent/20 bg-accent rounded-[10px] flex justify-center items-center text-sm sm:text-base font-semibold tracking-[-0.14px] sm:tracking-[-0.16px] text-white duration-200"
              >
                Go to Login
              </Link>

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
