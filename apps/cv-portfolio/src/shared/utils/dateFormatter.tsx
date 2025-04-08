'use client';

import { format } from 'date-fns';

interface DateFormatterProps {
  date: Date | string;
}

export default function DateFormatter({ date }: DateFormatterProps) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date;

  return (
    <time dateTime={parsedDate.toISOString()} className="text-gray-500 dark:text-gray-400 text-sm">
      {format(parsedDate, 'PPpp')}
    </time>
  );
}
