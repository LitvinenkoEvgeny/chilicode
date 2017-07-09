import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import AppComponent from './AppComponent';
import {showChange, agreeChange} from '../redux/modules/visibilityState';


class AppContainer extends Component {
  render() {
    return (
      <AppComponent
        visibility={this.props.visibility}
        showChange={this.props.showChange}
        agreeChange={this.props.agreeChange}
      />
    )
  }
}

AppContainer.propTypes = {
  visibility: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  visibility: state.visibility,
});

const mapDispatchToProps = dispatch => ({
});




export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

