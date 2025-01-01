import React from 'react';
import { Star } from 'lucide-react';
import { Book } from '../../types/book';

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200';

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img
        src={thumbnail}
        alt={volumeInfo.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{volumeInfo.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-1">
          {volumeInfo.authors?.join(', ') || 'Unknown Author'}
        </p>
        {volumeInfo.averageRating && (
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{volumeInfo.averageRating}</span>
          </div>
        )}
      </div>
    </div>
  );
};