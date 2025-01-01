import React from 'react';
import { Book as BookIcon } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center text-gray-500">
      <BookIcon className="h-16 w-16 mx-auto mb-4 text-gray-400" />
      <p className="text-xl">Search for your favorite books</p>
      <p className="text-sm mt-2">Enter a title, author, or keyword to get started</p>
    </div>
  );
};