import PageContainer from '../../../../components/layout/PageContainer';

export const metadata = {
  title: 'Workspaces - Sistaimu',
  description: 'Organize your life projects and tasks in dedicated workspaces.',
};

export default function WorkspacesPage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="text-6xl">✨</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Workspaces. Maintenance in Progress.
        </h1>
        <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg">
          We&apos;re currently laying the foundation for this page. Check back
          soon!
        </p>
      </div>
    </PageContainer>
  );
}
