"use client";
import { Suspense } from "react";
import Form from "./Form";

export default function FormWrapper() {
  return (
    <Suspense>
      <Form />
    </Suspense>
  );
}
