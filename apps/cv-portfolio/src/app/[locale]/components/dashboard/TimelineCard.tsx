'use client';

import { ClockIcon } from '@heroicons/react/24/outline';

interface TimelineCardProps {
  title: string;
  time: string;
}

export default function TimelineCard({ title, time }: TimelineCardProps) {
  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 shadow-sm transition-transform transform hover:scale-105 hover:shadow-md duration-300">
      <div className="flex items-center space-x-3">
        <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h3 className="text-md font-medium text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <time className="text-sm text-gray-600 dark:text-gray-400">{time}</time>
    </div>
  );
}
