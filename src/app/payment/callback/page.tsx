import type { Metadata } from "next";
import { Suspense } from "react";
import PaymentCallbackPageView from "@/legacy-pages/payment/callback";

export const metadata: Metadata = {
  title: "نتیجه پرداخت",
  robots: { index: false, follow: false }
};

export default function PaymentCallbackPage() {
  return (
    <Suspense fallback={null}>
      <PaymentCallbackPageView />
    </Suspense>
  );
}
