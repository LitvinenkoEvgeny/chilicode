import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import {StyleSheet, css} from 'aphrodite';

import './rangeSlider.custom.sass';
import fonts from '../styles/fonts';
import {formatDays, formatPrice} from '../Utils/format';

class RangeSliderComponent extends Component {
  constructor(){
    super(...arguments);

    this.state = {
      value: this.props.min
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.formatLabel = this.formatLabel.bind(this);
  }

  handleChange(newValue) {
    this.setState({value: newValue});
  }

  handleMouseWheel(e) {
    e.preventDefault();

    if (e.deltaY < 0 && this.state.value !== this.props.max) {
      this.setState({value: this.state.value + this.props.step});
    } else if (e.deltaY > 0 && this.state.value !== this.props.min) {
      this.setState({value: this.state.value - this.props.step});
    }

  }

  formatLabel(num) {
    return this.props.type === 'price'? formatPrice(num) : `${num} ${formatDays(num)}`;
  }

  render() {

    return (
      <div>
        <span className={css(styles.value)}>{this.formatLabel(this.state.value)}</span>

        <div className={css(styles.sliderWrapper)} onWheel={this.handleMouseWheel}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            value={this.state.value}
            onChange={this.handleChange}
            tooltip={false}
            format={this.formatLabel}
            className='range-slider range-slider--custom'
          />
        </div>

        <span className={css(styles.minLabel, styles.left)}>
          {this.formatLabel(this.props.min)}
        </span>
        <span className={css(styles.minLabel, styles.right)}>
          {this.formatLabel(this.props.max)}
        </span>
      </div>
    )
  }
}

RangeSliderComponent.propTypes = {
    min : PropTypes.number.isRequired,
    max : PropTypes.number.isRequired,
    step : PropTypes.number.isRequired,
    type : PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  value: {
    color: '#ffffff',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 36,
    fontWeight: 400,
  },
  minLabel: {
    color: '#ffffff',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 18,
    fontWeight: 400,
  },
  sliderWrapper: {
    cursor: 'pointer',
  },
  right: {
    float: 'right'
  }
});

export default RangeSliderComponent;
