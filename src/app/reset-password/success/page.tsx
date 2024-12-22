import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import emailSentImg from "@/assets/images/email-sent.svg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verify Your Email Address",
  description:
    "Confirm your email address to complete your registration and gain full access to your account.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/success`,
    title: "Verify Your Email Address",
    description:
      "Confirm your email address to complete your registration and gain full access to your account.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function Success() {
  return (
    <main>
      <section className="grid xl:grid-cols-2">
        <div className="h-[100svh] py-5 pl-5 hidden xl:block">
          <Slider />
        </div>

        <div className="h-[100svh] xl:py-5 xl:pr-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={emailSentImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Email sent!
              </h1>

              <p className="mb-3 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                We just sent an email verification message to
              </p>

              <p className="py-2 px-6 border border-white-dark bg-off-white rounded-lg text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-center">
                echodzns@protonmail.com
              </p>

              <span className="my-6 w-full max-w-[375px] h-px bg-primary/10 block"></span>

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
