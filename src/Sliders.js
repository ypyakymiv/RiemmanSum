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
      setN(parseInt(n.value))
    }

    start.oninput = () => {
      setStart(parseInt(start.value))
    }

    end.oninput = () => {
      setEnd(parseInt(end.value))
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
          left: '-50%',
          display: 'table'
        }}>
          <div style={{verticalAlign: 'middle', display: 'table-cell'}}>
            <span style={{display: 'block', textAlign: 'center'}}>
              start = {start}
            </span>
            <input type="range" min="-100" max="0" id="start" defaultValue={start} />
          </div>
          <div style={{verticalAlign: 'middle', display: 'table-cell'}}>
            <span style={{display: 'block', textAlign: 'center'}}>
              n = {n}
            </span>
            <input type="range" min="1" max="100" id="n" defaultValue={n} />
          </div>

          <div style={{verticalAlign: 'middle', display: 'table-cell'}}>
            <span style={{display: 'block', textAlign: 'center'}}>
              end = {end}
            </span>
            <input type="range" min="0" max="100" id="end" defaultValue={end} />
          </div>
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
