import { DashboardLayoutClient } from './DashboardLayout.client';

export const metadata = {
  title: 'Dashboard — Honomono CV Portfolio',
  description: 'Manage your workspaces, schedules, and life commits ✯',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayoutClient>{children}</DashboardLayoutClient>;
}
