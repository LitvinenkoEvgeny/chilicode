import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';


class PointsComponent extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      show: true
    };

    this.generatePoints = this.generatePoints.bind(this);
    this.doRenderPoints = this.doRenderPoints.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.doRenderPoints);
  }

  doRenderPoints() {
    if (window.innerWidth >= 1300) {
      this.setState({show: true});
    } else {
      this.setState({show: false});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.doRenderPoints);
  }


  generatePoints() {
    let i = 1;
    let pointsList = [];

    while (i !== this.props.size) {
      const className = css(
        styles.point,
        i === this.props.now && styles.active
      );

      pointsList.push(
        <div key={i} className={className}/>
      );

      i++;
    }

    return pointsList;
  }

  render() {
    const className = css(
      styles.pointsContainer,
      this.state.show && styles.showPoints
    );

    return (
      <div className={className}>
        {this.generatePoints()}
      </div>
    );
  }
}


PointsComponent.propTypes = {
  size: PropTypes.number.isRequired,
  now: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  pointsContainer: {
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(-1110%, 0)',
    transition: 'transform .3s ease-in-out'
  },
  showPoints: {
    transform: 'translate(0, 0)',
  },
  point: {
    width: 7,
    height: 7,
    margin: 3,
    marginBottom: 17,
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    cursor: 'pointer',
    transition: 'margin .8s ease-in-out, border-color .8s ease-in-out',
  },
  active: {
    margin: 0,
    border: '3px solid #fff',
    transition: 'margin .8s ease-in-out, border-color .8s ease-in-out',
  }
});

export default PointsComponent;

