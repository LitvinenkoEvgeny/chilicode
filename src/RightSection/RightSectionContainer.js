import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import RightSectionComponent from './RightSectionComponent';

class RightSectionContainer extends Component {
  render() {
    return (
      <RightSectionComponent show={this.props.show}/>
    );
  }
}

RightSectionContainer.propTypes = {
  show: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  show: state.visibility.showRight,
});


export default connect(mapStateToProps, null)(RightSectionContainer);

