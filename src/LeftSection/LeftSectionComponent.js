import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';

import Points from '../Points/PointsComponent';
import AgreeView from '../Agree/AgreeContainer';

const LeftSectionComponent = ({nowStep, calculate, stepName}) => {
  return (
  <div className={css(styles.overlay, styles.centerChild)}>
    <Points now={nowStep} size={7} />
    <AgreeView calculate={calculate} />
  </div>
)};

LeftSectionComponent.propTypes = {
  nowStep: PropTypes.number.isRequired,
  stepName: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    flex: 1.5,
  },
  centerChild: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default LeftSectionComponent;
