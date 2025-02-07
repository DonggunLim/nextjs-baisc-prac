import { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  // console.log(`${pathname} [middleware]`, req);
  console.log(`${req.nextUrl.pathname} [middleware]`);
  if (pathname.startsWith("/api/products")) {
    const hasToken = req.headers.has("token");
    if (!hasToken) {
      console.log("팅겨냄");
      // return NextResponse.redirect(new URL("/", req.url));
      // NextResponse.redirect(new URL("/", req.url), {});
    }
  }
};

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
