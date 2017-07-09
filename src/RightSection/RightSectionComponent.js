import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

import Dropdown from '../Common/Input/DropDown';
import RightForm from '../RightForm/RightFormComponent';

const RightSectionComponent = ({show}) => (
  <div className={css(styles.right, show && styles.visible)}>
    <div className={css(styles.form)}>
      <RightForm onSubmit={(data) => console.log(data)}/>

      {/*<Dropdown items={['1 месяц', '2 месяца', '3 месяца']}*/}
                {/*icon={require('../assets/img/icon-down.png')}/>*/}

    </div>
  </div>
);

RightSectionComponent.propTypes = {
  show: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  right: {
    flex: 2,
    backgroundColor: '#fff',
    transition: 'transform .8s ease-in-out',
    transform: 'translate(110%, 0)',
  },
  visible: {
    transform: 'translate(0)'
  },
  form: {
    width: `${641 / 1110 * 100}%`,
  }
});

export default RightSectionComponent;
