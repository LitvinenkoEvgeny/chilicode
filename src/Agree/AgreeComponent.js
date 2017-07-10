import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite/no-important';

import Button from '../Common/Button/ButtonComponent';
import RangeSliderComponent from '../RangeSlider/RangeSliderComponent';
import CheckBox from '../Common/Checkbox/CheckboxComponent';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

function AgreeComponent({onAgree, isAgree, calculate, onDisAgree}) {
  return (
    <div className={css(styles.inner)}>
      <RangeSliderComponent min={5000} max={100000} step={100} type={'price'} />
      <RangeSliderComponent min={1} max={365} step={1} type={'days'} />
      <CheckBox onDisAgree={onDisAgree} onAgree={onAgree} />
      <span className={css(styles.checkboxText)}>Согласие на обработку данных</span>
      <Button active={isAgree} onClick={() => isAgree && calculate()}>Рассчитать кредит</Button>
      <p className={css(styles.info)}>
        Магнитуда землетрясения, согласно традиционным представлениям, вызывает туффит, и в то же время устанавливается достаточно приподнятый над уровнем моря
        коренной цоколь. Явление культурологического порядка параллельно. Алеаторика пододвигается под межпланетный
      </p>
    </div>
  );
}

AgreeComponent.propTypes = {
};

const styles = StyleSheet.create({
  checkboxText: {
    color: colors.white,
    fontFamily: [fonts.PFDinDisplayPro],
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 400,
  },
  info: {
    color: 'rgba(255, 255, 255, .5)',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 16,
    fontWeight: 300,
    marginTop: 32
  },
  inner: {
    width: 500,
  }

});
export default AgreeComponent;

