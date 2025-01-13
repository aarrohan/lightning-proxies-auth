"use client";
import { Suspense } from "react";
import Content from "./Content";

export default function ContentWrapper() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}
