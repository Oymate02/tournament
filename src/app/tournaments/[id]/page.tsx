export default async function Tournaments({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h1>Product: {id}</h1>;
}