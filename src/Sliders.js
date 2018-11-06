import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setStart, setEnd, setN } from './redux/math';

class Sliders extends Component {

  componentDidMount() {
    const { setStart, setEnd, setN } = this.props;
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    var n = document.getElementById('n');

    n.oninput = () => {
      setN(n.value)
    }

    start.oninput = () => {
      setStart(start.value)
    }

    end.oninput = () => {
      setEnd(end.value)
    }
  }

  render() {

    const { start, end, n } = this.props;

    return (
      <div style={{
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        left: '50%'
      }}>
        <div style={{
          position: 'relative',
          left: '-50%'
        }}>
          <input type="range" min="-100" max="100" id="start" defaultValue={start} />
          <input type="range" min="1" max="100" id="n" defaultValue={n} />
          <input type="range" min="-100" max="100" id="end" defaultValue={end} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    start: state.start,
    end: state.end,
    n: state.n
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStart: bindActionCreators(setStart, dispatch),
    setEnd: bindActionCreators(setEnd, dispatch),
    setN: bindActionCreators(setN, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
