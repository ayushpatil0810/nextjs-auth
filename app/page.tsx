import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
      <main className="flex flex-col items-center text-center gap-6 px-6">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Next<span className="text-blue-500">Auth</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-sm">
          A simple authentication app built with Next.js.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/login"
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </main>
    </div>
  );
}
