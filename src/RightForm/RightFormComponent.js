import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite/no-important';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import Steps from '../Steps/StepsComponent';

class RightFormComponent extends Component {
  constructor(){
    super(...arguments);


    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(){
    this.props.nextStep();
  }

  prevPage(){
    this.setState({page: this.state.page - 1});
  }

  render() {
    const step = this.props.nowStep;
    return (
      <div>
        <Steps now={this.props.nowStep} size={4} />
        {step === 2 && <FirstPage onSubmit={this.nextPage}/>}
        {step === 3 && <SecondPage onSubmit={this.nextPage}/>}
        {step === 4 && <ThirdPage formValues={this.props.formValues} onSubmit={this.nextPage}/>}
        {step === 5 && <FourthPage onSubmit={(data) => console.log(data)}/>}
      </div>
    );
  }
}

RightFormComponent.propTypes = {
  nowStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  formValues: PropTypes.object,
};

export default RightFormComponent;

