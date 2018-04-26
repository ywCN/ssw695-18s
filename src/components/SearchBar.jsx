import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Search, Grid } from 'semantic-ui-react';

import { search } from '../actions';

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

      // TODO: call actions here
      // TODO: get redux states here

      this.setState({
        isLoading: false,
        results: [
          {
            title: 'Tom',
            description: '10 year Java developer',
            image:
              'https://www.imaswmp.in/wp-content/uploads/default-avatar.jpg',
            contact: '000-000-0000'
          },
          {
            title: 'Lily',
            description: '3 year JavaScript developer',
            image:
              'https://www.imaswmp.in/wp-content/uploads/default-avatar.jpg',
            contact: '111-111-1111'
          },
          {
            title: 'Jerry',
            description: '15 year php developer',
            image:
              'https://www.imaswmp.in/wp-content/uploads/default-avatar.jpg',
            contact: '222-222-2222'
          }
        ]
      });
    }, 500);

    clearTimeout(this.state.timeout);

    this.setState({
      timeout: setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent();
        if (this.state.cookie) {
          console.log('searching');
          // this.props.search(this.state.value, this.state.cookie); // search on server is broken, use it later
        }
      }, 500)
    });
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

export default connect(null, { search })(SearchBar);
