// PageContainer.tsx
import Link from 'next/link';

export default function PageContainer({
  children,
  hideBackLink = false,
}: {
  children: React.ReactNode;
  hideBackLink?: boolean;
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {!hideBackLink && (
        <div className="mb-4">
          <Link
            href="/dashboard"
            className="text-blue-600 hover:underline text-sm"
          >
            ← Back to Dashboard
          </Link>
        </div>
      )}
      {children}
    </section>
  );
}
