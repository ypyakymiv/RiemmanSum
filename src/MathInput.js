/* global MQ, math, latex_to_js, $ */

import React, { Component } from 'react';
import { setExpression, setValid } from './redux/math';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MathInput extends Component {

  state = {
    visible: false,
    mf: null
  }

  componentDidUpdate(prevProps, prevState) {
    const { mf, visible } = this.state;
    if(prevState.visible != visible && mf) {
      mf.focus();
    }
  }

  componentDidMount() {
    const { parse } = math;
    const { setValid, setExpression } = this.props;

    MQ.StaticMath(document.getElementById('func'));

    var el = document.getElementById('mathinput');

    var mf = MQ.MathField(el, {
      handlers: {
        enter: () => {
          if(this.state.visible) {
            this.setState({visible: false})
          }
        },
        edit: () => {
          if(!this.state.visible) {
            this.setState({visible: true});
          }

          var latx = latex_to_js(mf.latex());
          try {
            if(latx == "") throw "blank";
            var expr = parse(latx).compile().eval({x: Math.random() * 1000});
            setValid(true);
            setExpression(latx);
          } catch(error) {
            console.log(error)
            setValid(false);
            setExpression(null);
          }

        }
      }
    });

    document.addEventListener('wheel', () => {
      if(this.state.visible)
        this.setState({visible: false});
    });

    document.addEventListener('mousedown', () => {
      if(this.state.visible)
        this.setState({visible: false});
    });

    document.addEventListener('mouseup', (e) => {
      if(this.state.visible) {
        this.setState({visible: false});
      }
      if(e.target.id != "typeselect") {
        mf.focus();
      }

    });

    $('#typeselect').on('blur', () => {
        mf.focus();
    })

    mf.focus();

    this.setState({mf});
  }

  render() {

    const { valid } = this.props;
    const { visible } = this.state;

    return (
      <div style={{
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        zIndex: 2,
        opacity: visible ? 1 : 0
      }}>
        <div style={{
          position: 'relative',
          left: '-50%',
          padding: 20,
          backgroundColor: 'white',
          border: '1px solid ' + (valid ? 'green' : 'red'),
          borderRadius: 15,
          fontSize: 50,
          // pointerEvents: visible ? 'default' : 'none'
        }}>
          <span id="func" style={{
            fontSize: 50,
            bottomPadding: -5
          }}>y=</span>
          <span id="mathinput" style={{
            border: 'none',
            outline: 'none',
            fontSize: 50,
            // pointerEvents: visible ? 'default' : 'none'
          }} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: state.expression,
    valid: state.valid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setExpression: bindActionCreators(setExpression, dispatch),
    setValid: bindActionCreators(setValid, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MathInput);
