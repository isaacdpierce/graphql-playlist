import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

class BookList extends Component {
  displayBooks() {
    const { data } = this.props;

    if (data.loading) {
      return <div>Loading...</div>;
    }
    return data.books.map(book => <li key={book.id}>{book.name}</li>);
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export default graphql(getBooksQuery)(BookList);
