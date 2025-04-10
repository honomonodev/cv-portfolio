import PageContainer from '@/components/layout/PageContainer';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <PageContainer>
      <header>
        <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Manage your workspaces, schedules, and life commits!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workspaces Card */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400 space-y-4">
          <div>
            <p>No workspaces yet.</p>
            <p className="mt-2 text-sm">
              Start by creating your first workspace to track projects and
              milestones.
            </p>
          </div>
          <Link
            href="/dashboard/workspaces/"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Create Workspace
          </Link>
        </div>

        {/* Timeline Card */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400">
          <p>No timeline entries yet.</p>
          <p className="mt-2 text-sm">
            Your life commits and events will appear here.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
