import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {css, StyleSheet} from 'aphrodite';
import * as fonts from '../../styles/fonts';

class DoubleRadio extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      checked: '',
    };

    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(value) {
    this.setState({...this.state, checked: value});
    this.props.input.value = this.state.value;
  }

  render() {
    return (
      <div>
        <input type="radio" value={this.props.values.first} className={css(styles.hidden)}/>
        <input type="radio" value={this.props.values.second} className={css(styles.hidden)}/>

        <div className={css(styles.doubleRadio)}>

          <div className={css(styles.radioItem,
            this.state.checked === this.props.values.first && styles.radioItemChecked)}
               onClick={() => this.handleCheckBoxClick(this.props.values.first)}>

            <img src={require('../../assets/img/tick.png')}
                 className={css(styles.img,
                   this.state.checked === this.props.values.first && styles.imgSlideLeft)}
                 alt="icon"/>
            <span >
              {this.props.values.first}
            </span>

          </div>

          <div className={css(styles.radioItem,
            this.state.checked === this.props.values.second && styles.radioItemChecked)}
               onClick={() => this.handleCheckBoxClick(this.props.values.second)}>

            <span >
              {this.props.values.second}
            </span>

            <img src={require('../../assets/img/tick.png')}
                 className={css(styles.img,
                   this.state.checked === this.props.values.second && styles.imgSlideRight)}
                 alt="icon"/>

          </div>

        </div>

      </div>
    );
  }
}

DoubleRadio.propTypes = {
  values: PropTypes.shape({
    first: PropTypes.PropTypes.string.isRequired,
    second: PropTypes.PropTypes.string.isRequired,
  }).isRequired,
};

const slideRight = {
  '0%': {
    opacity: 0,
    transform: 'translate(-20%, 0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(10%, 0)',
  }
};


const slideLeft = {
  '0%': {
    opacity: 0,
    transform: 'translate(20%, 0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-10%, 0)',
  }
};

const styles = StyleSheet.create({
  doubleRadio: {
    width: 159,
    height: 52,
    borderRadius: 25,
    border: '1px solid #6caf2a',
    backgroundColor: '#ffffff',
    display: 'flex',
    overflow: 'hidden'
  },
  hidden: {
    display: 'none'
  },
  radioItem: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
    color: '#6f6f6f',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 16,
    fontWeight: 300,
    transition: 'background-color .3s ease-in-out, color .3s ease-in-out',
  },
  radioItemChecked: {
    color: '#fff',
    backgroundColor: '#6caf2a'
  },
  img: {
    marginBottom: 3,
  },
  imgSlideRight: {
    animationName: [slideRight],
    animationDuration: '.8s',
    animationFillMode: 'both',
  },
  imgSlideLeft: {
    animationName: [slideLeft],
    animationDuration: '.8s',
    animationFillMode: 'both',
  }
});

export default DoubleRadio;

