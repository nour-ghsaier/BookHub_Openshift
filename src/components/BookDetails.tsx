import React from 'react';
import { X, Calendar, Book as BookIcon, Star } from 'lucide-react';
import { Book } from '../../types/book';

interface BookDetailsProps {
  book: Book;
  onClose: () => void;
}

export const BookDetails: React.FC<BookDetailsProps> = ({ book, onClose }) => {
  const { volumeInfo } = book;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{volumeInfo.title}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=200'}
              alt={volumeInfo.title}
              className="w-48 h-64 object-cover rounded-lg"
            />

            <div className="flex-1">
              <p className="text-gray-600 mb-4">{volumeInfo.authors?.join(', ')}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                {volumeInfo.publishedDate && (
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{volumeInfo.publishedDate}</span>
                  </div>
                )}
                {volumeInfo.pageCount && (
                  <div className="flex items-center">
                    <BookIcon className="h-5 w-5 mr-2 text-gray-500" />
                    <span>{volumeInfo.pageCount} pages</span>
                  </div>
                )}
                {volumeInfo.averageRating && (
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400 fill-current" />
                    <span>{volumeInfo.averageRating}/5</span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                {volumeInfo.categories?.map((category, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                {volumeInfo.description || 'No description available.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};