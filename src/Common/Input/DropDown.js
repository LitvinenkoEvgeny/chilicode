import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import {isChildren} from '../../Utils/domHelpers';
import * as fonts from '../../styles/fonts';

class DropDown extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleDropItemClick = this.handleDropItemClick.bind(this);
  }

  componentWillMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }


  handleWindowClick(e) {
    if (isChildren(e.target, this.wrapper)) return;
    this.setState({open: false});
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleIconClick(e) {
    e.preventDefault();
    this.setDropDownWidth(this.getInputWidth());
    this.setState({open: !this.state.open})
  }

  handleFocus(e) {
    e.preventDefault();
    this.setState({open: true});
    this.setDropDownWidth(this.getInputWidth());
  }

  handleDropItemClick(value) {
    this.setState({value: value, open: false});
    this.props.input.onChange(value);
  }

  setDropDownWidth(width) {
    this.dropdown.style.width = width + 'px';
  }

  getWrapperWidth() {
    return this.wrapper.offsetWidth;
  }

  getInputWidth() {
    return this.input.offsetWidth;
  }

  render() {
    const dropDownClass = css(
      styles.dropItems,
      this.state.open && styles.dropItemsShow
    );

    const {
      input,
      meta: {touched, error}
    } = this.props;

    return (
      <div>
        <div className={css(
          styles.wrapper,
          touched && error && styles.error
        )} ref={item => this.wrapper = item}>
          <input {...this.props.input}
                 value={this.state.value}
                 ref={input => this.input = input}
                 className={css(styles.input)}
                 type="text"
                 onClick={this.handleClick}
                 onFocus={this.handleFocus}
          />

          <div className={dropDownClass} ref={dropdown => this.dropdown = dropdown}>
            {this.props.items.map((item, index) => (
              <div key={index}
                   onClick={() => this.handleDropItemClick(item)}
                   className={css(styles.dropItem)}>
                {item}
              </div>
            ))}
          </div>

          {this.props.icon && <div onClick={this.handleIconClick} className={css(styles.icon)}>
            <img
              className={css(styles.image, this.state.open && styles.imageUp)}
              src={this.props.icon} alt="icon"/>
          </div>}
        </div>
      </div>
    );
  }
}

DropDown.propTypes = {
  icon: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  label: PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  })
};

const slideIn = {
  '0%': {
    bottom: 0,
    opacity: 0,
  },
  '50%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
    bottom: '-100%'
  }
};

const styles = StyleSheet.create({
  wrapper: {
    width: 307,
    height: 52,
    display: 'flex',
    position: 'relative',
    border: '1px solid #9e9e9e',
    transition: 'border-color .3s ease-in-out',
  },
  input: {
    width: 307,
    padding: 20,
    boxSizing: 'border-box',
    border: 0,
    zIndex: 2,
    backgroundColor: '#ffffff',
    ':focus': {
      outline: 'none'
    }
  },
  error: {
    borderColor: '#f00'
  },
  dropItems: {
    display: 'none',
    border: '1px solid #000',
    zIndex: 10,
    backgroundColor: 'white',
    position: 'absolute',
    transition: 'opacity .5s ease-in-out'
  },
  dropItemsShow: {
    display: 'block',
    opacity: '1',
    animationName: [slideIn],
    animationDuration: '.8s',
    animationFillMode: 'both'
  },
  dropItem: {
    cursor: 'pointer',
    transition: 'color .3s ease-in-out, background-color .3s ease-in-out',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 300,
    borderRadius: 5,
    ':hover': {
      backgroundColor: 'rgba(158, 158, 158, 0.34)',
    },
    ':not(first-child)': {
      marginTop: 5
    }
  },
  icon: {
    backgroundColor: '#9e9e9e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 51,
    cursor: 'pointer',
  },
  image: {
    transition: 'transform .5s ease-in-out',
  },
  imageUp: {
    transform: 'rotate(.5turn)'
  }
});

export default DropDown;
