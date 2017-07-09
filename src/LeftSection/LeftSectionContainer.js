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

    this.state = {
      step: 1
    };

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.setState({step: ++this.state.step});
    this.props.calculate();
    this.props.goToNext();
  }

  render() {
    return (
      <LeftSectionComponent isAgree={this.props.isAgree}
                            setAgree={this.props.agree}
                            nowStep={this.state.step}
                            calculate={this.nextStep}
                            stepName={this.props.stepName}
                            />
    );
  }
}

LeftSectionContainer.propTypes = {
  isAgree: PropTypes.bool.isRequired,
  stepName: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
  agree: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAgree: state.visibility.agree,
  stepName: state.steps.now
});

const mapDispatchToProps = dispatch => ({
  agree: bindActionCreators(actionCreators.agree, dispatch),
  calculate: bindActionCreators(actionCreators.calculate, dispatch),
  goToNext: bindActionCreators(stepActions.nextStep, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftSectionContainer);

