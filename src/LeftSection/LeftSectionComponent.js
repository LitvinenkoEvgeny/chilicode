import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import Points from '../Points/PointsComponent';
import AgreeView from '../Agree/AgreeContainer';
import LeftSteps from '../LeftSteps/LeftStepsComponent';

const LeftSectionComponent = ({nowStep, calculate, steps}) => {
  return (
  <div className={css(styles.overlay,
    styles.centerChild,
    nowStep === 2 && styles.bg2,
    nowStep === 3 && styles.bg3,
    nowStep === 4 && styles.bg4,
    nowStep === 5 && styles.bg5,
  )}>

    <Points now={nowStep} size={steps} />
    {nowStep === 1 && <AgreeView calculate={calculate} />}
    {nowStep > 1 && <LeftSteps nowStep={nowStep}/> }
  </div>
)};

LeftSectionComponent.propTypes = {
  nowStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  calculate: PropTypes.func.isRequired,
};

const bgimg2 = require('../assets/img/leftbg2.jpg');
const bgimg3 = require('../assets/img/leftbg3.jpg');
const bgimg4 = require('../assets/img/leftbg4.jpg');
const bgimg5 = require('../assets/img/leftbg4.jpg');
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    backgroundRepeat: 'no-repeat',
    flex: 1.5,
    backgroundSize: 'cover',
    position: 'relative',
  },
  centerChild: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bg2: {
    backgroundImage: `url(${bgimg2})`
  },
  bg3: {
    backgroundImage: `url(${bgimg3})`
  },
  bg4: {
    backgroundImage: `url(${bgimg4})`
  },
  bg5: {
    backgroundImage: `url(${bgimg5})`
  },
  img: {
    opacity: 0,
    position: 'absolute',
    display: 'none',
    transition: 'opacity .3s ease-in-out'
  },
  imgShow: {
    opacity: 1,
    display: 'block',
  }
});

export default LeftSectionComponent;
