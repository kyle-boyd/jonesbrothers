"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-xl font-bold text-gray-900">Something went wrong</h1>
      <p className="text-gray-600 text-center max-w-md">
        We ran into an error. You can try again.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
      >
        Try again
      </button>
    </main>
  );
}
