import { FC, ReactNode } from "react";

interface ProfileLayoutProps {
  children: Readonly<ReactNode>;
  categories: Readonly<ReactNode>;
  productList: Readonly<ReactNode>;
}

const ShopLayout: FC<ProfileLayoutProps> = ({
  children,
  categories,
  productList,
}) => {
  return (
    <>
      <h1>/app/shop/layout.tsx 레이아웃</h1>
      {categories}
      {productList}
      {children}
    </>
  );
};

export default ShopLayout;
