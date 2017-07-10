import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getFormValues} from 'redux-form';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as stepActions from '../redux/modules/steps';
import RightFormComponent from './RightFormComponent';

class RightFormContainer extends Component {
  render() {
    return (
      <RightFormComponent nowStep={this.props.nowStep}
                          steps={this.props.steps}
                          nextStep={this.props.nextStep}
                          formValues={this.props.values} />
    );
  }
}

RightFormContainer.propTypes = {
  nowStep: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  nowStep: state.steps.now,
  steps: state.steps.steps,
  values: getFormValues('simple')(state),
});

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(stepActions.nextStep, dispatch),
});



export default connect(mapStateToProps, mapDispatchToProps)(RightFormContainer);

