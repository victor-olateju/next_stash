"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const Navigation = () => {
    const pathName = usePathname()

    const setLinkClass = (active: string) => {
        return `mr-4 ${((pathName === active)) ? 'font-bold text-white-500' : 'text-blue-500'}`
        //    || (pathName.startsWith(active))
    }

    return <nav className="flex justify-center items-center p-4">
        <Link rel="stylesheet" className={setLinkClass('/')} href="/">Home</Link>
        <Link rel="stylesheet" className={setLinkClass('/about')} href="/about">About</Link>
        <Link rel="stylesheet" className={setLinkClass('/products/1')} href="/products/1">Product 1</Link>

        <SignedOut>
            <SignInButton mode="modal" />
        </SignedOut>

        <SignedIn>
            <Link rel="stylesheet" className={setLinkClass('/mock-users')} href="/mock-users">Mock Users</Link>
            <UserButton />
        </SignedIn>
    </nav>
}