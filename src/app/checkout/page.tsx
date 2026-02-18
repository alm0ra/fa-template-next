import type { Metadata } from "next";
import CheckoutPageView from "@/legacy-pages/CheckoutPage";

export const metadata: Metadata = {
  title: "تکمیل خرید",
  robots: { index: false, follow: false },
  alternates: { canonical: "/checkout" }
};

export default function CheckoutPage() {
  return <CheckoutPageView />;
}
