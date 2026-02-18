import type { Metadata } from "next";
import OrderTrackingPageView from "@/legacy-pages/OrderTrackingPage";

export const metadata: Metadata = {
  title: "پیگیری سفارش",
  robots: { index: false, follow: false },
  alternates: { canonical: "/order" }
};

export default function OrderPage() {
  return <OrderTrackingPageView />;
}
