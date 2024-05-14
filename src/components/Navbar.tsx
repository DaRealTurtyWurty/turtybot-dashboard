"use client";

import {useSession} from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
    const { data: session } = useSession();

    return <nav className="flex items-center justify-between flex-wrap bg-gray-800 dark:bg-gray-900 p-6 w-full z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">TurtyBot Dashboard</span>
        </div>
        {session && <div className="flex items-center flex-shrink-0 text-white gap-4 flex-row cursor-pointer">
            <span className="font-semibold text-xl tracking-tight">{session?.user?.name || "Unknown"}</span>
            <Image
                src={session?.user?.image || "https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"}
                width={50}
                height={50}
                alt="User Avatar"
                className="rounded-full shadow-lg" />
        </div>}
    </nav>
}