import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Search, Grid } from 'semantic-ui-react';

import { search, clearSearch } from '../actions';

class SearchBar extends Component {
  state = {
    timeout: setTimeout(() => {}, 5000)
  };

  componentWillMount() {
    const cookie = new Cookies().get('loginStatus');
    this.setState({ cookie });
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: [],
      value: ''
    });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      if (this.state.cookie) {
        this.props.clearSearch();
        this.props.search(this.state.value, this.state.cookie);
      }

      const processed = [
        ...this.props.searchResults.projects,
        ...this.props.searchResults.users
      ].map(a => {
        return {
          title: a.username,
          description: a.email,
          image: 'https://www.imaswmp.in/wp-content/uploads/default-avatar.jpg'
        };
      });

      this.setState({
        isLoading: false,
        results: processed
      });
    }, 500);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ searchResults }) => {
  return { searchResults };
};

export default connect(mapStateToProps, { search, clearSearch })(SearchBar);
