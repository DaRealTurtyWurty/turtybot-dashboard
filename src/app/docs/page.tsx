import Link from "next/link";

export default function Docs() {
    return (<div className="container text-white bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg p-6 mx-auto my-6">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="text-2xl">Find in-depth information about TurtyBot&apos;s features and commands.</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
            <Link
                href="/docs/commands"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out"
            >
                <h3 className="text-2xl font-bold">Commands &rarr;</h3>
                <p className="mt-4 text-xl">
                    Find in-depth information about TurtyBot&apos;s commands.
                </p>
            </Link>
            <Link
                href="/docs/features"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out"
            >
                <h3 className="text-2xl font-bold">Features &rarr;</h3>
                <p className="mt-4 text-xl">
                    Find in-depth information about TurtyBot&apos;s features.
                </p>
            </Link>
            <Link
                href="/docs/faq"
                className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 transition duration-200 ease-in-out"
            >
                <h3 className="text-2xl font-bold">FAQ &rarr;</h3>
                <p className="mt-4 text-xl">
                    Find in-depth information about TurtyBot&apos;s FAQ.
                </p>
            </Link>
        </div>
    </div>)
}