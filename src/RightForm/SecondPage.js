import React from 'react'
import {css, StyleSheet} from 'aphrodite/no-important';
import {Field, reduxForm} from 'redux-form'


import * as fonts from '../styles/fonts';
import Input from '../Common/Input/Input';
import DoubleRadio from '../Common/Input/DoubleRadio';
import Button from '../Common/Button/ButtonComponent';

import * as validateFuncs from './validation-functions';

const SecondForm = props => {
  const {handleSubmit, pristine, reset, submitting, valid} = props;
  return (
    <form onSubmit={handleSubmit} className={css(styles.form)}>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Регион (край,область) проживания</label>
        <Field component={Input}
               validate={[validateFuncs.required]}
               name='region' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Город проживания</label>
        <Field component={Input}
               name='city' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Улица места проживания</label>
        <Field component={Input}
               name='street' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Номер дома</label>
        <Field component={Input}
               type='text'
               name='houseNumber' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Номер квартиры</label>
        <Field component={Input}
               type='text'
               name='flatNumber' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Место регистрации совпадает<br/>с местом проживания? </label>
        <Field component={DoubleRadio}
               defaultValue="Да"
               values={{first: 'Да', second: 'Нет'}}
               name='sex' />
      </div>
      <Button onClick={handleSubmit} active={valid}>Продолжить</Button>
    </form>
  )
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
    ':not(last-child)': {
      marginBottom: 15
    }
  },
  label: {
    color: '#212121',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 18,
    fontWeight: 400,
    alignSelf: 'center',
  }
});

const validate = values => {
  const errors = {};

  return errors;
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SecondForm)
