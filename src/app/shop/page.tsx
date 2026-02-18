import type { Metadata } from "next";
import ShopPageView from "@/legacy-pages/ShopPage";

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "فروشگاه آنلاین - مشاهده و خرید محصولات",
  alternates: { canonical: "/shop" }
};

export default function ShopPage() {
  return <ShopPageView />;
}
