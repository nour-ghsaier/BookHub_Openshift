export interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      description?: string;
      publishedDate?: string;
      imageLinks?: {
        thumbnail: string;
      };
      averageRating?: number;
      categories?: string[];
      pageCount?: number;
    };
  }