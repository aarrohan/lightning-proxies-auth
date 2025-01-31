import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import iconImg from "@/assets/images/icon.svg";
import Link from "next/link";
import FormWrapper from "./FormWrapper";

export const metadata: Metadata = {
  title: "Register Your Account",
  description:
    "Create a new account to start using our premium proxy services. Enjoy seamless setup and unmatched performance.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/signup`,
    title: "Register Your Account",
    description:
      "Create a new account to start using our premium proxy services. Enjoy seamless setup and unmatched performance.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function Signup() {
  return (
    <main>
      <section className="grid xl:grid-cols-2">
        <div className="hide-scrollbar h-[100svh] xl:py-5 xl:pl-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={iconImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Create your account
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Lightning fast proxies are just a click away
              </p>

              <FormWrapper />

              <Link
                href={"/login"}
                className="mb-3 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-center text-primary/75"
              >
                Already have an account?{" "}
                <span className="font-semibold text-accent">Login</span>
              </Link>
            </div>

            <Footer />
          </div>
        </div>

        <div className="h-[100svh] py-5 pr-5 hidden xl:block">
          <Slider />
        </div>
      </section>
    </main>
  );
}
