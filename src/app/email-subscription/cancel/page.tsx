import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Email Subscription Cancel",
  description:
    "Your email subscription has been successfully cancelled. You will no longer receive any emails from us.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/email-subscription/cancel`,
    title: "Email Subscription Cancel",
    description:
      "Your email subscription has been successfully cancelled. You will no longer receive any emails from us.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function EmailSubscriptionCancel() {
  return <Content />;
}
