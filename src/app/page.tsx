"use client";

import {signIn, useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {IoLogoDiscord} from "react-icons/io5";
import Image from "next/image";

export default function Home() {
    const {data: session} = useSession();
    const router = useRouter();

    console.log(session);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center text-white bg-gray-900 dark:bg-gray-800 gap-6">
            <h1 className="text-6xl font-bold">Welcome to the TurtyBot Dashboard!</h1>
            {session ?
                (
                    <div className="flex flex-row items-center justify-center gap-4 text-2xl">
                        <div className="flex flex-row items-center justify-center">
                            <p className="text-2xl">You are currently logged in as </p>
                            <Image
                                src={session?.user?.image || "https://discord.com/assets/1f0bfc0865d324c2587920a7d80c609b.png"}
                                width={35}
                                height={35}
                                alt="User Avatar"
                                className="rounded-full shadow-lg inline-block mx-2"
                            />
                            <p className="text-2xl"><span className="font-bold">{session?.user?.name || "Unknown"}</span>!</p>
                        </div>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
                            onClick={() => {
                                return router.push("/dashboard");
                            }}
                        >
                            <IoLogoDiscord className="inline-block mr-2"/>
                            Go to Dashboard
                        </button>
                    </div>
                )
                : (<div className="flex flex-row items-center justify-center gap-4 text-2xl">
                    <p className="text-2xl">You are not currently logged in!</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
                        onClick={() => {
                            return signIn();
                        }}
                    >
                        <IoLogoDiscord className="inline-block mr-2"/>
                        Sign In
                    </button>
                </div>)}

            <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
                <a
                    href="/docs"
                    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out"
                >
                    <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
                    <p className="mt-4 text-xl">
                        Find in-depth information about TurtyBot&apos;s features and commands.
                    </p>
                </a>

                <a
                    href="/dashboard"
                    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out"
                >
                    <h3 className="text-2xl font-bold">Configure &rarr;</h3>
                    <p className="mt-4 text-xl">
                        Configure TurtyBot to work specifically for your server with the configuration panel.
                    </p>
                </a>
            </div>
        </div>
    )
}
