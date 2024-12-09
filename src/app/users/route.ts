
// interface Users {
//     id: number,
//     name: string
// }

export const users = [
    {id:1, name: "A John"},
    {id:2, name: "B John"},
    {id:3, name: "C John"},
]



export async function GET() :Promise<Response> {
    return Response.json(users)
}
export async function POST(request: Request){
    const user = await request.json()
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers: {
            "Content-Type": "application/json"
        },
        status: 201 //status: created
    })
}