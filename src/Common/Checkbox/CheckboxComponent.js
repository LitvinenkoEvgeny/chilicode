import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important';
import fonts from '../../styles/fonts';

import * as colors from '../../styles/colors';

class CheckboxComponent extends Component {
  constructor(){
    super(...arguments);

    this.state = {
      agree: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({agree: !this.state.agree});
    if(this.state.agree){
      this.props.onDisAgree();
    } else {
      this.props.onAgree();
    }
  }

  render() {
    const checkBoxClass = css(
      styles.checkbox,
      this.state.agree && styles.checkboxOn
    );
    const handlerClass = css(
      styles.handler,
      this.state.agree && styles.handlerOn,
    );

    return (
      <div className={checkBoxClass} onClick={this.handleClick}>
        <span className={css(styles.text)}>
          {this.state.agree? 'да' : 'нет'}
        </span>
        <div className={handlerClass} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    width: 50,
    height: 20,
    borderRadius: 7,
    backgroundColor: colors.grey,
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color .3s ease-in-out',
    display: 'inline-block',
    marginBottom: 50
  },
  checkboxOn: {
    backgroundColor: '#6caf2a',
    right: 0,
    left: 0
  },
  handler: {
    width: 23,
    height: 23,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: -2,
    left: -6,
    transition: 'left .3s cubic-bezier(0.14, 0.41, 0.57, 0.71)',
    borderRadius: '50%'
  },
  handlerOn: {
    left: `${35 / 50 * 100}%`,
  },
  text: {
    position: 'relative',
    paddingLeft: 20,
    top: -1,
    color: '#ffffff',
    fontFamily: [fonts.PFDinDisplayPro],
    fontSize: 12,
    fontWeight: 400,
  }
});


export default CheckboxComponent;

