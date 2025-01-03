import React from 'react';
import type { Book } from '../types/book';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export function BookCard({ book, onClick }: BookCardProps) {
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200';

  return (
    <div
      onClick={onClick}
      className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={volumeInfo.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{volumeInfo.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {volumeInfo.authors?.join(', ') || 'Unknown Author'}
        </p>
        {volumeInfo.averageRating && (
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm text-gray-600">{volumeInfo.averageRating}</span>
          </div>
        )}
      </div>
    </div>
  );
}