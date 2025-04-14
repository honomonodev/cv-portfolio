import PageContainer from '../../components/layout/PageContainer';

export const metadata = {
  title: 'Your Timeline - Sistaimu',
  description: 'Track your life commits and milestones in your timeline.',
};

export default function TimelinePage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <p>Your timeline entries will appear here soon.</p>
    </PageContainer>
  );
}
