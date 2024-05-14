"use client";

import {useSession} from "next-auth/react";

export default function Dashboard() {
    const {data} = useSession();
    if (!data) {
        return (
            <div className="container text-white bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg p-6 mx-auto my-6">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <p className="mt-4">You need to be authenticated to access this page.</p>
            </div>
        )
    }

    return (
        <div className="flex flex-row gap-5 items-center text-white">
            <aside className="bg-gray-800 dark:bg-gray-700 w-64 md:shadow p-5 left-0 h-screen">
                hello
            </aside>
            <div className="container text-white bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg p-6 m-6 ml-0">
                <h1 className="text-3xl font-semibold">Dashboard</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?
                    Quaerat, quia. Quisquam, voluptatum? Quaerat, quia.</p>

                <div className="mt-4">
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600">Button
                    </button>
                </div>
            </div>
        </div>
    )
}