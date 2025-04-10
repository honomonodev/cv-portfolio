export default function DashboardPage() {
  return (
    <section className="max-w-7xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Manage your workspaces, schedules, and life commits!
        </p>
      </header>

      {/* Empty States */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400">
          <p>No workspaces yet.</p>
          <p className="mt-2 text-sm">
            Start by creating your first workspace to track projects and
            milestones.
          </p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-center text-gray-500 dark:text-gray-400">
          <p>No timeline entries yet.</p>
          <p className="mt-2 text-sm">
            Your life commits and events will appear here.
          </p>
        </div>
      </div>
    </section>
  );
}
