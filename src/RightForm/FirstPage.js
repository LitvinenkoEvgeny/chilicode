import React from 'react'
import {css, StyleSheet} from 'aphrodite';
import {Field, reduxForm} from 'redux-form'


import * as fonts from '../styles/fonts';
import DropDown from '../Common/Input/DropDown';
import Input from '../Common/Input/Input';
import DoubleRadio from '../Common/Input/DoubleRadio';
import DateInput from '../Common/Input/DateInput';

const SimpleForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props;
  return (
    <form onSubmit={handleSubmit} className={css(styles.form)}>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Желаемый срок займа</label>
        <Field component={DropDown}
               label={{text: 'Желаемый срок займа', to: 'top'}}
               name='dropdown'
               items={['2', '3']}
               icon={require('../assets/img/icon-down.png')}/>
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>ФИО</label>
        <Field component={Input}
               name='fullName' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Пол</label>
        <Field component={DoubleRadio}
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
               name='phone' />
      </div>
      <div className={css(styles.formRow)}>
        <label className={css(styles.label)}>Адрес электронной почты</label>
        <Field component={Input}
               name='mail' />
      </div>
    </form>
  )
};

const styles = StyleSheet.create({
  form: {
    width: 641,
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

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)
