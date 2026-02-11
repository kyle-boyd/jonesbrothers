import Link from "next/link";

export default function TestDesignBanner() {
  return (
    <div className="bg-amber-500 text-amber-950 py-2 px-4 flex items-center justify-center gap-4 text-sm font-medium">
      <span>Test design</span>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950 text-amber-50 rounded hover:bg-amber-900 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back
      </Link>
    </div>
  );
}
