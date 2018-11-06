/* global JXG, math */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Graph extends Component {

  state = {
    board: null,
    f: null,
    func: null,
    rsum: null
  }

  _clearRSum = () => {
    const { board, rsum } = this.state;
    board.removeObject(rsum);
    this.setState({rsum: null});
  }

  _clearFunc = () => {
    const { board, func } = this.state;
    board.removeObject(func);
    this.setState({func: null});
  }

  _clearGraph = () => {
    const { func, rsum } = this.state;
    if(rsum)
      this._clearRSum();
    if(func)
      this._clearFunc();
  }

  _setRSum = () => {
    const { start, end, n } = this.props;
    const { f, board } = this.state;
    var rsum = board.create('riemannsum',[f, () => n, () => 'trapezoidal', () => start, () => end],
    {fillColor:'#ffff00', fillOpacity:0.3});
    this.setState({rsum});
  }

  _setGraph = () => {
    const { expression, start, end, n } = this.props;
    const { board } = this.state;
    const code = math.parse(expression).compile()
    const f = (x) => {
      return code.eval({x});
    }
    var func = this.state.board.create('functiongraph',[f, -10, 10]);
    var rsum = board.create('riemannsum',[f, () => n, () => 'trapezoidal', () => start, () => end],
    {fillColor:'#ffff00', fillOpacity:0.3});
    this.setState({f, func, rsum});
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { props } = this
    if(nextProps.expression != props.expression && nextState.board) {
      return true;
    } else if(nextProps.n != props.n || nextProps.start != props.start || nextProps.end != props.end) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { func, board, rsum } = this.state;
    const { props } = this;

    if(prevProps.n != props.n) {
      this._clearRSum();
      this._setRSum();
    }

    if(prevProps.expression != props.expression) {
      if(func||rsum)
        this._clearGraph();

      if(props.valid) {
        this._setGraph();
      }
    }

  }

  componentDidMount() {
    var brd = JXG.JSXGraph.initBoard('box', {axis: true, boundingbox: [-5,5,5,-5], showCopyright: false});
    this.setState({board: brd})
  }

  render() {
    return (
      <div id="box" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }} />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    expression: state.expression,
    valid: state.valid,
    n: state.n,
    start: state.start,
    end: state.end
  };
}

export default connect(mapStateToProps)(Graph);
