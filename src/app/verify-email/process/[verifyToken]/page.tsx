import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Verify Email",
  description:
    "Verify your email address to gain access to your account. Please check your email for the verification link.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/verify-email/[verifyToken]`,
    title: "Verify Email",
    description:
      "Verify your email address to gain access to your account. Please check your email for the verification link.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default async function VerifyEmail({
  params,
}: {
  params: Promise<{ verifyToken: string }>;
}) {
  const { verifyToken } = await params;

  if (!verifyToken) return redirect("/");

  return <Content verifyToken={verifyToken} />;
}
