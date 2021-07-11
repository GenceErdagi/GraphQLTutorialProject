import React, { FC } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Book } from '../types/types';

const getBooksQuery = gql`
  {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;
interface Props {
  bookId: String;
  handleViewBookClick: any;
}
const BookList: FC<Props> = ({ bookId, handleViewBookClick }) => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.books.map((book: Book) => (
        <ul key={book.id}>
          <li>
            <p>
              {book.name} {book.author.name}
            </p>
            <button onClick={() => handleViewBookClick(book.id)}>
              View Book
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BookList;
