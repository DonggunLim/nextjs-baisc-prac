"use client";

// import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigator = () => {
  const { push } = useRouter();
  return (
    <>
      {/* <Link href="/">home</Link>
      <Link href="/profile">profile</Link>
      <Link href="/shop">shop</Link> */}
      <button onClick={() => push("/")}>home</button>
      <button onClick={() => push("/profile")}>profile</button>
      <button onClick={() => push("/shop")}>shop</button>
    </>
  );
};

export default Navigator;
