import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite/no-important';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';


const Button = ({active, children, ...props}) => {
  const className = css(
    styles.button,
    active? styles.red : styles.disabled
  );
  return <button className={className} {...props}><span className={css(styles.text)}>{children}</span></button>
};

Button.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    height: 38,
    border: '0',
    outline: 'none',
    borderRadius: 18,
    color: '#ffffff',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'block',
    padding: '15px 35px',
    lineHeight: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    marginBottom: 0,
    cursor: 'pointer',
    transition: 'background-color .3s ease-in-out',
  },
  disabled: {
    backgroundColor: 'rgb(140, 139, 139)',
    cursor: 'not-allowed',
  },
  red: {
    backgroundColor: '#d32f2f',
    ':hover': {
      backgroundColor: '#ad1515',
    }
  },
  text: {
  }
});

export default Button;
