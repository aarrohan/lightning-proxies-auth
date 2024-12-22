import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Password Reset Successful",
  description:
    "Your password has been successfully reset. You can now log in to your account with your new credentials.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/password-reset-success`,
    title: "Password Reset Successful",
    description:
      "Your password has been successfully reset. You can now log in to your account with your new credentials.",
    images: `${process.env.NEXT_PUBLIC_WEB_URL}/images/og-img.png`,
  },
};

export default function setNewPassword() {
  return <Content />;
}
