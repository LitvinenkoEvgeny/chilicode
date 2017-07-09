import {StyleSheet} from 'aphrodite/no-important';

export default StyleSheet.create({
  wrapper: {
    width: 307,
    height: 52,
    display: 'flex',
    position: 'relative',
    border: '1px solid #9e9e9e',
  },
  input: {
    width: 307,
    border: 0,
    zIndex: 2,
    backgroundColor: '#ffffff',
    ':focus': {
      outline: 'none'
    }
  },
  icon: {
    backgroundColor: '#9e9e9e',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 51,
    cursor: 'pointer',
  },
  calendarContainer: {
    position: 'absolute',
  }
});
