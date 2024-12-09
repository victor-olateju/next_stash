import { auth, currentUser } from "@clerk/nextjs/server"; // to access user data Server side
import { revalidatePath } from "next/cache" //to update new data after form submission

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UsersServer(){

    const authObj = await auth()
    const userObj = await currentUser()

    console.log(authObj, userObj)

    // introduce delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const res = await fetch("https://6752f72ef3754fcea7ba4591.mockapi.io/users")
    const users = await res.json()

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get("name")
        const res = await fetch("https://6752f72ef3754fcea7ba4591.mockapi.io/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name})
        })

        const newUser = await res.json();
        revalidatePath("/mock-users")
        console.log(newUser)
    }    

    

    return <div className="py-10">

    <form action={addUser} className="mb-4">
        <input type="text" name="name" className="border p-2 mr-2 rounded" required/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">  Add User</button>
    </form>

    <ul
    className='space-y-4 p-4'
    >
    {users?.map((user: User)=>(
        <li 
        key={user.id}
        className='p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
            {user.name} ({user.email})
        </li>
    ))}        
    </ul>

    </div> 
}