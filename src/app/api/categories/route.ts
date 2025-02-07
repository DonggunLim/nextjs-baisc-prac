export async function GET() {
  console.log(`/api/categories [ROUTE]`);
  return Response.json(["cat-A", "cat-b", "cat-c"]);
}
