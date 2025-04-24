import '@/styles/global.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import { AccessibilityProvider } from '../../context';
import { PreferencesControl } from '../../components';
import ToasterClient from '../../components/ui/ToasterClient';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AccessibilityProvider>
            {children}
            <PreferencesControl />
            <ToasterClient />
          </AccessibilityProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
