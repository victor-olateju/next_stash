"use client"
import { useState } from "react"
import { useAuth, useUser } from "@clerk/nextjs"; // to access user data client side


export const Counter = () => {

    const {isLoaded, userId, sessionId, getToken} = useAuth();
    const {isLoaded: isL, isSignedIn, user} = useUser()
    

    console.log("Count Component")
    console.log(userId, sessionId, user, getToken)
    const [count, setCount] = useState<number>(0)

    // if(!isLoaded || !userId) return null
    if(!isLoaded || isL || !isSignedIn) return null

    return <div>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
}