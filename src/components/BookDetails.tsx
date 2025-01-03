import React from 'react';
import type { Book } from '../types/book';
import { X } from 'lucide-react';

interface BookDetailsProps {
  book: Book;
  onClose: () => void;
}

export function BookDetails({ book, onClose }: BookDetailsProps) {
  const { volumeInfo } = book;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
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
          
          <div className="flex gap-6 mb-6">
            <img
              src={volumeInfo.imageLinks?.thumbnail || 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200'}
              alt={volumeInfo.title}
              className="w-32 h-48 object-cover rounded"
            />
            <div>
              <p className="text-lg mb-2">
                By {volumeInfo.authors?.join(', ') || 'Unknown Author'}
              </p>
              <p className="text-gray-600 mb-2">
                Published: {volumeInfo.publishedDate || 'Unknown'}
              </p>
              {volumeInfo.averageRating && (
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{volumeInfo.averageRating}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700">
              {volumeInfo.description || 'No description available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}