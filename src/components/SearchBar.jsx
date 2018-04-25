import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Grid } from 'semantic-ui-react';

import { search } from '../actions';

class SearchBar extends Component {
  state = {
    timeout: setTimeout(() => {}, 5000)
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({
      isLoading: false,
      results: 'replace with redux state',
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
        results: 'redux states'
      });
    }, 500);

    clearTimeout(this.state.timeout);

    this.setState({
      timeout: setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent();
        console.log('searching keyword:', this.state.value);
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
