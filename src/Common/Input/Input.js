import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import PropTypes from 'prop-types';

import VMasker from 'vanilla-masker';


class Input extends Component {
  componentDidMount() {
    if(this.props.mask){
      VMasker(this.input).maskPattern(this.props.mask);
    }
  }

  render() {
    return (
      <input type="text"
             ref={input => this.input}
             {...this.props.input}
             className={css(styles.input)}/>
    );
  }
}

Input.propTypes = {
  mask: PropTypes.string,
};

const styles = StyleSheet.create({
  input: {
    width: 307,
    height: 52,
    border: '1px solid #9e9e9e',
    zIndex: 2,
    backgroundColor: '#ffffff',
    ':focus': {
      outline: 'none'
    }
  }
});

export default Input;
