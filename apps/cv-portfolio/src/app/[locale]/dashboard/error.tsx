'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-gray-500 dark:text-gray-400">
      <h1 className="text-2xl font-semibold mb-2">
        Oops! Something went wrong.
      </h1>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
