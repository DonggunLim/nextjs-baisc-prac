import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Page",
  description: "Generated by create next app",
};

const ShopPage = () => {
  return (
    <div className="border-2 white">
      <h1>this is default shop page(children)</h1>
      <h1>url : /app/shop/page.tsx</h1>
    </div>
  );
};

export default ShopPage;
