export const dynamic = "force-dynamic";

import RevalidateProduct from "@/components/RevalidateProduct";
import { API_BASE_URL } from "@/utils/api";
import { unstable_cache } from "next/cache";

const ProductList = async () => {
  const products = await getProductList();

  return (
    <div className="border-2 border-white">
      <h2>@ProductList</h2>
      <ul>{products?.data}</ul>
      <RevalidateProduct />
    </div>
  );
};

export default ProductList;

const getProductList = unstable_cache(
  async (): Promise<{ data: string } | undefined> => {
    console.log(`getProductList [SSR PAGE]`);
    const response = await fetch(`${API_BASE_URL}/api/products`);
    const data = await response.json();
    return data;
  },
  ["products"],
  { revalidate: 60, tags: ["products"] }
);
