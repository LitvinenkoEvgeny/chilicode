import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import VMasker from 'vanilla-masker';


class Input extends Component {
  componentDidMount() {
    if (this.props.mask) {
      VMasker(this.input).maskPattern(this.props.mask);
    }
  }

  render() {
    const {
      input,
      label,
      type,
      meta: {touched, error, warning}
    } = this.props;
    return (
      <div>
        <input type="text"
               ref={input => this.input = input}
               {...this.props.input}
               placeholder={this.props.placeholder}
               className={css(
                 styles.input,
                 touched && error && styles.error,
                 touched && warning && styles.warning,
               )}/>
      </div>
    );
  }
}

Input.propTypes = {
  mask: PropTypes.string,
  placeholder: PropTypes.string,
};

const styles = StyleSheet.create({
  input: {
    width: 307,
    height: 52,
    boxSizing: 'border-box',
    padding: 20,
    border: '1px solid #9e9e9e',
    transition: 'border-color .3s ease-in-out',
    zIndex: 2,
    backgroundColor: '#ffffff',
    ':focus': {
      outline: 'none'
    }
  },
  error: {
    borderColor: '#f00'
  },
  warning: {
    borderColor: 'orange'
  }
});

export default Input;
