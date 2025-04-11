import { LandingLayoutClient } from '../(landing)/LandingLayout.client';

export const metadata = {
  title: 'Honomono CV Portfolio',
  description: 'A11y-first frontend developer portfolio',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LandingLayoutClient>{children}</LandingLayoutClient>;
}
