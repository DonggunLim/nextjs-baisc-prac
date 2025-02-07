export const dynamic = "force-dynamic";

import { Metadata } from "next";
import { FC } from "react";

interface ProductDetailPageProps {
  params: Promise<{
    productId: string;
  }>;
}

// export const metadata: Metadata = {
//   title: "상품 상세 페이지",
//   description: "상품 상세 페이지 입니다.",
// };

export async function generateMetadata({
  params,
}: ProductDetailPageProps): // _parent: ResolvingMetadata // 부모 메타데이터 정보
Promise<Metadata> {
  // read route params
  const { productId } = await params;

  //   console.log(await parent);
  // fetch data
  //   const product = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: `${productId} product`,
    description: `this is ${productId} product page.`,
  };
}

const sleep = async (): Promise<void> =>
  await new Promise((resolve) => setTimeout(() => resolve(), 3000));

const getProduct = async (id: string) => {
  await sleep();
  const product = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ) //
    .then((res) => res.json());
  return product;
};

const ProductDetailPage: FC<ProductDetailPageProps> = async ({ params }) => {
  //   console.log(__dirname);
  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <>
      <h1>/app/shop/product/{productId}/page.tsx</h1>
      {JSON.stringify(product)}
    </>
  );
};

export default ProductDetailPage;
