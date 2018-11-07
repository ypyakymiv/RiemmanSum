import React, { Component } from 'react';
import posed from 'react-pose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setIntroVisible } from './redux/math';

const Box = posed.div({
  visible: {
    top: '0%',
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 1000 }
    }
  },
  hidden: {
    top: '-100%',
    transition: { duration: 1000 }
  }
});

class Intro extends Component {

  componentDidMount() {

    const { setVisible } = this.props;

    setTimeout(() => {
      setVisible(false);
    }, 3000)
  }

  Inner = (props) => {
    return (
      <Box pose={props.visible ? 'visible' : 'hidden'} style={{
        position: 'absolute',
        zIndex: 3,
        height: '100%',
        left: 0,
        right: 0,
        backgroundImage: 'url("cool.gif")',
        backgroundSize: '100% 100%',
        zIndex: 3
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: .6,
        }}/>

        <span style={{
          position: 'absolute',
          display: 'block',
          fontSize: 60,
          color: 'white',
          textAlign: 'center',
          width: '100%',
          top: 40,
        }}>
          Rizzuto's Reman Sum calculator
        </span>
        <div style={{position: 'absolute', left: '50%', bottom: '40%'}}>
          <img style={{position: 'relative', left: '-50%'}} src="rizzuto.png" />
        </div>
        <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, padding: 30}}>
          <span style={{display: 'block', width: '100%', fontSize: 30, color: 'white', textAlign: 'center', textAlign: 'center'}}>
            By Yuri Yakymiv
          </span>
          <span style={{display: 'block', width: '100%', fontSize: 24, color: 'white', textAlign: 'center', textAlign: 'center'}}>
            Also Grant
          </span>
        </div>
      </Box>
    );
  }

  render() {
    const { Inner } = this;
    const { visible } = this.props;
    return (
      <Inner visible={visible} />
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.introVisible
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisible: bindActionCreators(setIntroVisible, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
