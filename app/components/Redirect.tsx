"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Redirect = () => {
    const session = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(session.data?.user){
            router.push("/home")
        }
    },[])

    return null;
}