/* global JXG, math */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRSum, setASum } from './redux/math';

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
    const { start, end, n, type, setRSum, setASum } = this.props;
    const { f, board } = this.state;
    var rsum = board.create('riemannsum',[f, n, type, start, end],
    {fillColor:'#ffff00', fillOpacity:0.3, highlight: false});
    setASum(JXG.Math.Numerics.I([start, end], f));
    setRSum(parseFloat(rsum.Value()));
    this.setState({rsum});
  }

  _setGraph = () => {
    const { expression, start, end, n, type, setRSum, setASum } = this.props;
    const { board } = this.state;
    const code = math.parse(expression).compile()
    const f = (x) => {
      return code.eval({x});
    }
    var func = board.create('functiongraph',[f, start, end], {highlight: false});
    var rsum = board.create('riemannsum',[f, n, type, start, end],
    {fillColor:'#ffff00', fillOpacity:0.3, highlight: false});
    setASum(JXG.Math.Numerics.I([start, end], f));
    setRSum(parseFloat(rsum.Value(), 4));
    this.setState({f, func, rsum});
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { props } = this
    if(nextState.board == null) return false;

    if(nextProps.expression != props.expression
      || nextProps.n != props.n
      || nextProps.start != props.start
      || nextProps.end != props.end
      || nextProps.type != props.type) {
      return nextProps.valid ? true : false;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { func, board, rsum } = this.state;
    const { props } = this;

    if(prevProps.n != props.n || prevProps.type != props.type) {
      this._clearRSum();
      this._setRSum();
    }

    if((prevProps.expression != props.expression) || (prevProps.start != props.start) || (prevProps.end != props.end)) {
      if(func||rsum)
        this._clearGraph();

      if(props.valid) {
        this._setGraph();
      }
    }

 }

  componentDidMount() {
    var brd = JXG.JSXGraph.initBoard('box', {axis: true, boundingbox: [-5,5,5,-5], showCopyright: false, showNavigation: false, zoom: true, pan: true});
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
    end: state.end,
    type: state.type
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRSum: bindActionCreators(setRSum, dispatch),
    setASum: bindActionCreators(setASum, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
