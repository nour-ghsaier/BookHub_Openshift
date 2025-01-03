const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

export async function searchBooks(query: string) {
  try {
    const response = await fetch(
      `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&maxResults=20`
    );
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export async function getBookDetails(bookId: string) {
  try {
    const response = await fetch(`${GOOGLE_BOOKS_API}/${bookId}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
}