"use client"
import { useState, useEffect } from 'react'

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default function UsersClient(){
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        async function fetchUsers(){
            try {

                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!res.ok) throw new Error("Unable to fetch")
                const data = await res.json()
                setUsers(data)

            }catch(err){
                setError("Unable to fetch")
                if (err instanceof Error){
                    setError(`'Error':, ${err.message}`)
                }
            }finally{
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return <div>
        {loading ?  "Loading ..." : 
        error ? error : <ul
                className='space-y-4 p-4'
            >
            {users?.map(user=>(
                <li 
                key={user.id}
                className='p-4 bg-white shadow-md rounded-lg text-gray-700'
                >
                    {user.name} ({user.email})
                </li>
            ))}        
        </ul>}
    </div>
}