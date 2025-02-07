export async function GET() {
  console.log(`/api/products [ROUTE]`);
  return Response.json({ data: new Date().getTime() });
}
