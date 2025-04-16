import PageContainer from '../../../../components/layout/PageContainer';

export const metadata = {
  title: 'Your Timeline - Sistaimu',
  description: 'Track your life commits and milestones in your timeline.',
};

export default function TimelinePage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
        <div className="text-6xl">🚧</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100">
          Timeline Module is Under Construction
        </h1>
        <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg">
          Soon you will be able to track your life commits and milestones here.
          Stay tuned as we build your future step by step!
        </p>
      </div>
    </PageContainer>
  );
}
