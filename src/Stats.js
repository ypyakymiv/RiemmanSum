/* global $, JXG */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {

  render() {
    const { asum, rsum } = this.props;

    return (
      <div style={{
        position: 'absolute',
        display: 'table',
        left: 0,
        bottom: 0,
        zIndex: 2,
        padding: 10
      }}>
        <span style={{display: 'block', textAlign: 'middle'}} id="rsum">Riemann = {JXG.toFixed(rsum, 4)}</span>
        <span style={{display: 'block', textAlign: 'middle'}} id="asum">Integral = {JXG.toFixed(asum, 4)}</span>
        <span style={{display: 'block', textAlign: 'middle'}} id="accuracy">Accuracy = {JXG.toFixed(rsum/asum*100, 2)} %</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rsum: state.rsum,
    asum: state.asum
  }
}

export default connect(mapStateToProps)(Stats);
