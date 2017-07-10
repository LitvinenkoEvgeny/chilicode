import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class RightFormComponent extends Component {
  constructor(){
    super(...arguments);


    this.state = {
      page: 1
    };

    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.setState({page: this.state.page + 1});
  }

  prevPage(){
    this.setState({page: this.state.page - 1});
  }

  render() {
    const {page} = this.state;
    return (
      <div>
        {page === 1 && <FirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <SecondPage onSubmit={this.nextPage}/>}
        {page === 3 && <ThirdPage onSubmit={this.nextPage}/>}
      </div>
    );
  }
}

RightFormComponent.propTypes = {};
RightFormComponent.defaultProps = {};

const styles = StyleSheet.create({
  formContainer: {

  }
});

export default RightFormComponent;

