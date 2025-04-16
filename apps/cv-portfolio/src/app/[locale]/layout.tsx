import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/styles/global.css';
import { Toaster } from 'react-hot-toast';

import { AccessibilityProvider } from '../../context/AccessibilityContext';
import { routing } from '../../i18n/routing';
import LayoutWrapper from '../../components/layout/LayoutWrapper.client';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="flex min-h-screen flex-col justify-between">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AccessibilityProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
            <Toaster position="top-right" />
          </AccessibilityProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
