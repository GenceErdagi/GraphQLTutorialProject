import React, { useState } from 'react';
import BookList from './components/BookList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Book from './components/Book';

const client = new ApolloClient({
  uri: 'http://localhost:4000/qraphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [Id, setId] = useState('');
  const handleViewBookClick = (id: string) => {
    console.log(id);
    setId(id);
  };
  return (
    <ApolloProvider client={client}>
      <h1>Gence's Reading List</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <BookList bookId={Id} handleViewBookClick={handleViewBookClick} />
        <Book bookId={Id} />
      </div>
    </ApolloProvider>
  );
};

export default App;
