import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Choose a Design</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/modern"
          className="px-10 py-4 bg-blue-600 text-white no-underline rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium min-w-[140px] text-center"
        >
          Option 1
        </Link>
        <Link
          href="/traditional"
          className="px-10 py-4 bg-blue-600 text-white no-underline rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium min-w-[140px] text-center"
        >
          Option 2
        </Link>
        <Link
          href="/design-forward"
          className="px-10 py-4 bg-blue-600 text-white no-underline rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium min-w-[140px] text-center"
        >
          Option 3
        </Link>
      </div>
    </main>
  );
}
