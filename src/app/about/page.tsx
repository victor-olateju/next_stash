// PROGRAMMATIC NAVIGATION
"use client"
import { useRouter } from "next/navigation"


export default function About(){
    const router = useRouter()
return <>
    <h2>About</h2>
    <button onClick={() => router.push("/")} className="bg-blue-500 text-blue p-2 rounded-md">Home</button>
</>}