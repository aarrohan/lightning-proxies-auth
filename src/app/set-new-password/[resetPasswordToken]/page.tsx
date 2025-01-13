import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import setNewPasswordImg from "@/assets/images/set-new-password.svg";
import Link from "next/link";
import Form from "./Form";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Set a New Password",
  description:
    "Create a strong and secure password to regain access to your account. Ensure your account’s safety with a new password.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/set-new-password`,
    title: "Set a New Password",
    description:
      "Create a strong and secure password to regain access to your account. Ensure your account’s safety with a new password.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default async function setNewPassword({
  params,
}: {
  params: Promise<{ resetPasswordToken: string }>;
}) {
  const { resetPasswordToken } = await params;

  if (!resetPasswordToken) redirect("/reset-password");

  return (
    <main>
      <section>
        <div className="h-[100svh] xl:py-5 overflow-y-auto">
          <div className="h-full pt-12 xl:pt-16 pb-6 xl:pb-2 p-5 xl:px-16 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <Image
                src={setNewPasswordImg}
                alt=""
                className="w-[44px] sm:w-[64px] aspect-square"
              />

              <h1 className="mt-6 mb-1 text-lg sm:text-3xl font-semibold tracking-[-0.3px] text-center">
                Reset Password
              </h1>

              <p className="mb-6 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-center text-primary/50">
                Create a new strong password for your account
              </p>

              <Form resetPasswordToken={resetPasswordToken} />

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

            <Footer isVertical />
          </div>
        </div>
      </section>
    </main>
  );
}
