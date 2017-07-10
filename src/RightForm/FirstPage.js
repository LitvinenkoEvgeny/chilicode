import React from 'react'
import {css, StyleSheet} from 'aphrodite/no-important';
import {Field, reduxForm} from 'redux-form'


import * as fonts from '../styles/fonts';
import DropDown from '../Common/Input/DropDown';
import Input from '../Common/Input/Input';
import DoubleRadio from '../Common/Input/DoubleRadio';
import DateInput from '../Common/Input/DateInput';
import Button from '../Common/Button/ButtonComponent';

import * as validateFuncs from './validation-functions';

const FirstForm = props => {
  const {handleSubmit, warn, valid} = props;
  return (
    <form onSubmit={handleSubmit} className={css(styles.form)}>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Желаемый срок займа</label>
        <Field component={DropDown}
               label={{text: 'Желаемый срок займа', to: 'top'}}
               name='dropdown'
               items={['2 месяца', '3 месяца']}
               icon={require('../assets/img/icon-down.png')}/>
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>ФИО</label>
        <Field component={Input}
               validate={[validateFuncs.required, validateFuncs.minLength(15)]}
               name='fullName' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Пол</label>
        <Field component={DoubleRadio}
               defaultValue='Жен'
               values={{first: 'Муж', second: 'Жен'}}
               name='sex' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Дата рождения</label>
        <Field component={DateInput}
               icon={require('../assets/img/icon-calendar.png')}
               name='date' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Мобильный телефон</label>
        <Field component={Input}
               mask={'9 (999) 999 99 99'}
               placeholder='8 (902) 222 13 20'
               validate={[validateFuncs.phoneNumber]}
               name='phone' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Адрес электронной почты</label>
        <Field component={Input}
               validate={[validateFuncs.email]}
               placeholder="yourawesomemail@gmail.com"
               name='mail' />
      </div>
      <Button onClick={handleSubmit} active={valid && !warn}>Продолжить</Button>
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
  validate,
})(FirstForm)
