import type { Metadata } from "next";
import OrderTrackingPageView from "@/legacy-pages/OrderTrackingPage";

export const metadata: Metadata = {
  title: "جزئیات سفارش",
  robots: { index: false, follow: false }
};

export default function OrderByNumberPage() {
  return <OrderTrackingPageView />;
}
