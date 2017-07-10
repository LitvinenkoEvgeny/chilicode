import isPhoneNumber from 'is-phone-number';
export const required = value => (value ? undefined : 'Это поле обязательно к заполнению');

export const minLength = min => value =>
  value && value.length < min ? `Минимум ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)?
    'Неправильно заполнена почта' : undefined;

export const phoneNumber = value =>
  value && isPhoneNumber(value)
    ? 'Неправильно заполнен номер телефона'
    : undefined;
