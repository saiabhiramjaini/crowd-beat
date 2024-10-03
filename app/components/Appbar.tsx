"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
    const { data: session } = useSession();
    
    return (
        <div className="flex justify-between">
            <div>
                Crowd beat
            </div>

            <div>
                {session?.user ? (
                    <button 
                        className="p-2 m-2 bg-white text-gray-900" 
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                ) : (
                    <button 
                        className="p-2 m-2 bg-white text-gray-900" 
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                )}
            </div>
        </div>
    );
};
