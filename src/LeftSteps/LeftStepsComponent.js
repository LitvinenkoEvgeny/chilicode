import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import * as fonts from '../styles/fonts';

const headings = ['Общие данные', 'Место проживания', 'Данные клиента', 'Трудойствойство'];
const LeftStepsComponent = ({nowStep}) => {
  return (
    <aside className={css(styles.container)}>
      {headings.map((heading, index) =>
        <h3 key={index}
            className={css(styles.heading,
              nowStep === index + 2 && styles.headingActive
            )}
        >{heading}</h3>
      )
      }
    </aside>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto'
  },
  heading: {
    color: '#bdbdbd',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 24,
    fontWeight: 300,
    margin: 90,
    transition: 'color .5s ease-in-out',
  },
  headingActive: {
    color: '#ffffff',
  }
});

LeftStepsComponent.propTypes = {
  nowStep: PropTypes.number.isRequired
};

export default LeftStepsComponent;

