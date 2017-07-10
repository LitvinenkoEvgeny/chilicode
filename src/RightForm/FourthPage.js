import React from 'react'
import {css, StyleSheet} from 'aphrodite/no-important';
import {Field, reduxForm} from 'redux-form'


import * as fonts from '../styles/fonts';
import Input from '../Common/Input/Input';
import DoubleRadio from '../Common/Input/DoubleRadio';
import Button from '../Common/Button/ButtonComponent';

import * as validateFuncs from './validation-functions';

const FourthPage = props => {
  const {handleSubmit, onSubmit, pristine, reset, submitting, valid} = props;
  return (
    <form onSubmit={handleSubmit} className={css(styles.form)}>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Вы трудоустроены?</label>
        <Field component={DoubleRadio}
               defaultValue="Нет"
               values={{first: 'Да', second: 'Нет'}}
               name='hasWork' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Город, адрес работы</label>
        <Field component={Input}
               name='workAddress' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Название организации</label>
        <Field component={Input}
               name='organizationName' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Трудовой стаж на последнем<br/>месте работы (в месяцах)</label>
        <Field component={Input}
               name='howLongWork' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Полный ежемесячный доход<br/>(в рублях)</label>
        <Field component={Input}
               name='salary' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Должность</label>
        <Field component={Input}
               name='workPosition' />
      </div>

      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Рабочий телефон</label>
        <Field component={Input}
               mask={'9 (999) 999 99 99'}
               placeholder='8 (902) 222 13 20'
               validate={[validateFuncs.required, validateFuncs.phoneNumber]}
               name='workPhone' />
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
})(FourthPage)
