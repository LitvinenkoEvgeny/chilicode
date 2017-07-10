import React from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import 'normalize.css';

import '../styles/main.sass';
import LeftSection from '../LeftSection/LeftSectionContainer';
import RightSection from '../RightSection/RightSectionContainer';

const AppComponent = ({visibility}) => (
  <div className={css(styles.container)}>
    <LeftSection />
    <RightSection />
  </div>
);

AppComponent.propTypes = {
  visibility: PropTypes.object.isRequired,
};

const bg1 = require('../assets/img/monitor1bg.jpg');
const styles = StyleSheet.create({
  container: {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  heading: {
    margin: 0
  }
});

export default AppComponent;
