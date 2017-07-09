import React from 'react';
import {StyleSheet, css} from 'aphrodite';
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

const styles = StyleSheet.create({
  container: {
    backgroundImage: `url(${require('file-loader!../assets/img/monitor1bg.jpg')})`,
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
