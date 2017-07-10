import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import AgreeComponent from './AgreeComponent';
import * as actionCreators from '../redux/modules/visibilityState';

class AgreeContainer extends Component {
  render() {
    return (
      <AgreeComponent onAgree={this.props.onAgree}
                      onDisAgree={this.props.onDisAgree}
                      isAgree={this.props.isAgree}
                      calculate={this.props.calculate} />
    );
  }
}

AgreeContainer.propTypes = {
  isAgree: PropTypes.bool.isRequired,
  onAgree: PropTypes.func.isRequired,
  onDisAgree: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAgree: state.visibility.agree,
});

const mapDispatchToProps = dispatch => ({
  onAgree: bindActionCreators(actionCreators.agree, dispatch),
  onDisAgree: bindActionCreators(actionCreators.disagree, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(AgreeContainer);

