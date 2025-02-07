"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

export default function ProductDetailErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void; // 현재 url(segment) 리렌더
}) {
  const { push } = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);
  // console.log(__dirname);
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => push("/")}>GO HOME</button>
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
}
