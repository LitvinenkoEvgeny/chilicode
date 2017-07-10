import React from 'react'
import {css, StyleSheet} from 'aphrodite';
import {Field, reduxForm} from 'redux-form'


import * as fonts from '../styles/fonts';
import Input from '../Common/Input/Input';
import DoubleRadio from '../Common/Input/DoubleRadio';
import DateInput from '../Common/Input/DateInput';
import Button from '../Common/Button/ButtonComponent';

import * as validateFuncs from './validation-functions';

const SecondForm = props => {
  const {handleSubmit, pristine, reset, submitting, valid} = props;
  return (
    <form onSubmit={handleSubmit} className={css(styles.form)}>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Серия, номер паспорта</label>
        <Field component={Input}
               validate={[validateFuncs.required]}
               name='passportNumber' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Дата выдачи</label>
        <Field component={DateInput}
               icon={require('../assets/img/icon-calendar.png')}
               name='passportDate' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Кем выдан паспорт</label>
        <Field component={Input}
               name='passportWhoGive' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Код подразделения выдачи паспорта</label>
        <Field component={Input}
               type='text'
               name='passportCode' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Место рождения</label>
        <Field component={Input}
               type='text'
               name='bithPlace' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Есть займы в других кредитных<br/>организациях?</label>
        <Field component={DoubleRadio}
               defaultValue="Да"
               values={{first: 'Да', second: 'Нет'}}
               name='hasCredits' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Имеются просрочки по платежам?</label>
        <Field component={DoubleRadio}
               defaultValue="Нет"
               values={{first: 'Да', second: 'Нет'}}
               name='hasFailCredits' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Общая сумма задолженности</label>
        <Field component={Input}
               type='text'
               name='creditSum' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Когда заканчивается платежный срок?</label>
        <Field component={DateInput}
               icon={require('../assets/img/icon-calendar.png')}
               name='creditStopDate' />
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
