import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import Dropdown from '../Common/Input/DropDown';
import RightForm from '../RightForm/RightFormContainer';

const RightSectionComponent = ({show}) => (
  <div className={css(styles.right, show && styles.visible)}>
    <div className={css(styles.form)}>
      <RightForm />
    </div>
  </div>
);

RightSectionComponent.propTypes = {
  show: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  right: {
    display: 'flex',
    overflowY: 'scroll',
    alignItems: 'center',
    flex: 2,
    backgroundColor: '#fff',
    transition: 'transform .8s ease-in-out',
    transform: 'translate(110%, 0)',
  },
  visible: {
    transform: 'translate(0)'
  },
  form: {
    paddingLeft: 60
  }
});

export default RightSectionComponent;
