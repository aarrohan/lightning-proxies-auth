import Slider from "@/components/Slider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Lightning Proxies",
};

export default function Login() {
  return (
    <main>
      <section className="min-h-[100svh] p-5 grid grid-cols-2">
        <Slider />

        <div></div>
      </section>
    </main>
  );
}
