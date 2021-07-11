export interface Book {
  name: string;
  id: string;
  genre: string;
  authorId: string;
  author: Author;
}

export interface Author {
  name: string;
  age: string;
  id: string;
}
