import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import * as fonts from '../styles/fonts';

const renderStepItem = (item, now) => {
  const isActiveItem = (item <= now);
  const isFilled = (item < now);

  return <li key={item} className={css(styles.step,
    isActiveItem && styles.stepActive,
  )}>
    <span>{item}</span>
    <div className={css(styles.line)}>
      <div className={css(styles.fill,
        isFilled && styles.fillFull
      )}/>
    </div>
  </li>
};

const renderSteps = (now, size) => {
  let stepsArr = [];

  for (let i = 1; i < size + 1; i++) {
    stepsArr.push(renderStepItem(i, now));
  }
  return stepsArr;
};

const StepsComponent = ({now, size}) => {
  return (
    <div>
      {renderSteps(now - 1, size)}
    </div>
  );
};

StepsComponent.propTypes = {
  now: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  step: {
    width: 50,
    height: 50,
    listStyleType: 'none',
    display: 'inline-block',
    border: '1px solid #9e9e9e',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    color: '#6f6f6f',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 18,
    fontWeight: 300,
    textAlign: 'center',
    lineHeight: '52px',
    cursor: 'pointer',
    margin: '0 50px 50px',
    position: 'relative',
    transition: 'background-color .5s ease-in-out 1s, color .5s ease-in-out 1s, border-color .5s ease-in-out 1s',
    ':last-of-type > div': {
      display: 'none',
    }
  },
  stepActive: {
    backgroundColor: '#d32f2f',
    borderColor: '#d32f2f',
    color: '#fff'
  },
  line: {
    position: 'absolute',
    height: 1,
    top: '50%',
    right: '-103px',
    width: '103px',
    backgroundColor: '#9e9e9e',
  },
  fill: {
    width: 0,
    height: '100%',
    backgroundColor: '#d32f2f',
    transition: 'width 1s ease-in-out',
  },
  fillFull: {
    transition: 'width 1s ease-in-out',
    width: '100%',
  }
});

export default StepsComponent;

