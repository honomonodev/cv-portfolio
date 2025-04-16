import Link from 'next/link';
import clsx from 'clsx';

export default function CallToAction({
  label,
  href,
  variant = 'primary',
}: {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}) {
  const baseStyles =
    'px-6 py-3 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 transition text-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-white text-blue-600 border border-blue-600 hover:bg-gray-100 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700',
  };

  return (
    <Link href={href} className={clsx(baseStyles, variants[variant])}>
      {label}
    </Link>
  );
}
