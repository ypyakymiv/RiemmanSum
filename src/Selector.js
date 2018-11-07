/* global $ */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setType } from './redux/math';

class Selector extends Component {


  componentDidMount() {
    const { setType } = this.props;
    var sel = document.getElementById('typeselect');

    const f = () => {
      setType(sel.value);

      sel.blur();
    }

    $('#typeselect').change(f);

  }

  render() {
    const { type } = this.props;

    return (
      <div style={{
        position: 'absolute',
        zIndex: 2,
        right: 0,
        bottom: 0,
        padding: 10
      }}>
        <select id="typeselect" defaultValue={type}>
          <option className="typeoption" value="trapezoidal">trapezoidal</option>
          <option className="typeoption" value="middle">middle</option>
          <option className="typeoption" value="right">right</option>
          <option className="typeoption" value="left">left</option>
          <option className="typeoption" value="lower">lower</option>
          <option className="typeoption" value="upper">upper</option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setType: bindActionCreators(setType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
