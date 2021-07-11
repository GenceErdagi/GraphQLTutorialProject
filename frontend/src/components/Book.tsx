import { gql, useQuery } from '@apollo/client';
import React, { FC } from 'react';

const getBookQuery = gql`
  query RootQueryType($bookId: ID) {
    book(id: $bookId) {
      name
      genre
      author {
        name
      }
    }
  }
`;
interface Props {
  bookId: String;
}
const Book: FC<Props> = ({ bookId }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { bookId },
    skip: bookId === '' ? true : false,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error : ${data}`}</p>;
  if (bookId === '') return <></>;
  return (
    <div>
      <p>Book Name : {data.book.name}</p>
      <p>Book Genre : {data.book.genre}</p>
      <p>Author Name : {data.book.author.name}</p>
    </div>
  );
};

export default Book;
