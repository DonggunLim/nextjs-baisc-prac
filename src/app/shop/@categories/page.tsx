import { API_BASE_URL } from "@/utils/api";

export const dynamic = "force-dynamic";

const CategoriesPage = async () => {
  const categories = await getCategories();
  // console.log({ categories });
  return (
    <div className="border-2 border-white">
      <h2>@Categories</h2>
      <ul>
        {categories.map((cat, key) => (
          <li key={`category-${key}`}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;

// const sleep = async (time: number): Promise<void> => {
// return await new Promise((resolve) => setTimeout(() => resolve(), time));
// };

const getCategories = async (): Promise<Array<string>> => {
  console.log(`getCategories [SSR PAGE]`);
  // await sleep(2000);
  const response = await fetch(`${API_BASE_URL}/api/categories`, {
    headers: {
      token: "this is token",
    },
  });
  return await response.json();
};
