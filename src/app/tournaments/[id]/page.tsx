export default async function Tournaments({params }: {params: {id: string}}) {
    const { id } = params;
    return <h1>Product: {id}</h1>;
}