import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';
import VMasker from 'vanilla-masker';
import datePicker from 'pikaday';
import 'pikaday/css/pikaday.css';
import 'pikaday/css/theme.css';
import 'pikaday/css/triangle.css';

import styles from './inputStyles';

class DateInput extends Component {
  constructor(){
    super(...arguments);

    this.state = {
      value: '',
      open: false
    };

    this.handleIconClick = this.handleIconClick.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  componentDidMount() {
    VMasker(this.input).maskPattern('99-99-9999');

    const field = this.input;
    const self = this;

    this.picker  = new datePicker({
      position: 'top right',
      format: 'DD-MM-YYYY',
      container: self.calendarContainer,
      i18n: {
        previousMonth : 'Предыдущий месяц',
        nextMonth     : 'Следующий месяц',
        months        : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        weekdays      : ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
        weekdaysShort : ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
      },
      firstDay: 0,
      onSelect: function(date) {
        field.value = self.picker.toString();
        // self.setState({value: self.picker.toString()});
        self.setValue(self.picker.toString());
        self.toggleCalendar();
      }
    });

    this.calendarContainer.appendChild(this.picker.el);
    this.setCalendarContainerBottomStyle();
    this.picker.hide();
  }

  setValue(value){
    this.setState({value});
    this.props.input.onChange(value);
  }

  toggleCalendar(){
    this.state.open? this.picker.hide() : this.picker.show();
    this.setState({open: !this.state.open});
  }

  handleIconClick(){
    this.toggleCalendar();
  }

  componentWillUnmount() {
    this.picker.destroy();
  }


  getCalendarHeight(){
    return document.querySelector('.pika-single').clientHeight;
  }

  setCalendarContainerBottomStyle(){
    this.calendarContainer.style.bottom = `-${this.getCalendarHeight()}px`;
  }

  render() {
    return (
      <div className={css(styles.wrapper)}>

        <input {...this.props.input}
               className={css(styles.input)}
               type="text"
               ref={input => this.input = input} />

        <div className={`calendarContainer ${css(styles.calendarContainer)}`}
             ref={div => this.calendarContainer = div} />


        {this.props.icon && <div onClick={this.toggleCalendar} className={css(styles.icon)}>
          <img
            className={css(styles.image)}
            src={this.props.icon} alt="icon"/>
        </div>}
      </div>
    );
  }
}


DateInput.propTypes = {
  icon: PropTypes.string,
};

export default DateInput;

