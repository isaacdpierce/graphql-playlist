import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

class AddBook extends Component {
  displayAuthors() {
    const { data } = this.props;

    if (data.loading) {
      return <option disabled>Loading...</option>;
    }
    return data.authors.map(author => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  }

  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button type="submit">+</button>
      </form>
    );
  }
}

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export default graphql(getAuthorsQuery)(AddBook);
