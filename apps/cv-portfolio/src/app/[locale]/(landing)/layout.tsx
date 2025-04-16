import '@/styles/global.css';

import LandingLayoutClient from './LandingLayout.client';

export const metadata = {
  title: 'Honomono CV Portfolio',
  description: 'A11y-first frontend developer portfolio',
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LandingLayoutClient>{children}</LandingLayoutClient>;
}
