// 경로 (src)/utils/api.ts
export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000"
    : process.env.__NEXT_PRIVATE_ORIGIN;
