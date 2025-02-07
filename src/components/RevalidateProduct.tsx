"use client";

import { revalidateProducts } from "@/actions/products";

const RevalidateProduct = () => {
  console.log(__dirname, "revalidateProduct");
  return (
    <button
      onClick={() => revalidateProducts()}
      className="border-2 border-red-300"
    >
      revalidate-product-button
    </button>
  );
};

export default RevalidateProduct;
