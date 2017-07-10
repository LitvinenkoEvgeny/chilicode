import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import LeftSectionComponent from './LeftSectionComponent';
import * as actionCreators from '../redux/modules/visibilityState';
import * as stepActions from '../redux/modules/steps';

class LeftSectionContainer extends Component {
  constructor(){
    super(...arguments);

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.props.calculate();
    this.props.goToNext();
  }

  render() {
    return (
      <LeftSectionComponent isAgree={this.props.isAgree}
                            setAgree={this.props.agree}
                            nowStep={this.props.nowStep}
                            steps={this.props.steps}
                            calculate={this.nextStep}
                            />
    );
  }
}

LeftSectionContainer.propTypes = {
  isAgree: PropTypes.bool.isRequired,
  nowStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  calculate: PropTypes.func.isRequired,
  agree: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAgree: state.visibility.agree,
  nowStep: state.steps.now,
  steps: state.steps.steps,
});

const mapDispatchToProps = dispatch => ({
  agree: bindActionCreators(actionCreators.agree, dispatch),
  calculate: bindActionCreators(actionCreators.calculate, dispatch),
  goToNext: bindActionCreators(stepActions.nextStep, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSectionContainer);

