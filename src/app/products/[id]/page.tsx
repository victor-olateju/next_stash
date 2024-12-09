export default async function Product({params}: {params:{id:string}}){

    const {id} = await params

    return <>
        <h2>Product {id}</h2>
    </>
}