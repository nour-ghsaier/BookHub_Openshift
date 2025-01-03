import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { BookCard } from './components/BookCard';
import { BookDetails } from './components/BookDetails';
import { searchBooks } from './services/bookApi';
import type { Book } from './types/book';
import { Library } from 'lucide-react';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    const results = await searchBooks(query);
    setBooks(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Library className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">BookHub</h1>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : books.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-12">
            <p>Search for books to get started</p>
          </div>
        )}
      </main>

      {selectedBook && (
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
}

export default App;