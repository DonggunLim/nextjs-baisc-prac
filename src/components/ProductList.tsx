"use client";

import { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    throw Error("This is custom error.");
  }, []);

  return <h2>ProductList</h2>;
};

export default ProductList;
