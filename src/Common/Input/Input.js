import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <div>
      <input type="text"
             {...props.input}
             className={css(styles.input)}/>
    </div>
  );
}
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