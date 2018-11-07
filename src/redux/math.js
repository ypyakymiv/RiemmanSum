const SET_EXPRESSION = 'SET_EXPRESSION';
const SET_VALID = 'SET_VALID';
const SET_RSUM = 'SET_RSUM';
const SET_ASUM = 'SET_ASUM';
const SET_N = 'SET_N';
const SET_TYPE = 'SET_TYPE';
const SET_START = 'SET_START';
const SET_END = 'SET_END';
const SET_INTRO_VISIBLE = 'SET_INTRO_VISIBLE';

const initialState = {
  introVisible: true,
  expression: null,
  valid: false,
  n: 1,
  rsum: null,
  asum: null,
  start: -5,
  end: 5,
  type: 'middle'
}

const math = (state = initialState, action) => {
  switch(action.type) {
    case SET_EXPRESSION:
      return Object.assign({}, state, {expression: action.payload});
    case SET_VALID:
      return Object.assign({}, state, {valid: action.payload});
    case SET_RSUM:
      return Object.assign({}, state, {rsum: action.payload});
    case SET_ASUM:
      return Object.assign({}, state, {asum: action.payload});
    case SET_N:
      return Object.assign({}, state, {n: action.payload});
    case SET_TYPE:
      return Object.assign({}, state, {type: action.payload});
    case SET_START:
      return Object.assign({}, state, {start: action.payload});
    case SET_END:
      return Object.assign({}, state, {end: action.payload});
    case SET_INTRO_VISIBLE:
      return Object.assign({}, state, {introVisible: action.payload});
    default:
      return state;
  }
}

const setExpression = (expression) => {
  return {
    type: SET_EXPRESSION,
    payload: expression
  }
}

const setValid = (valid) => {
  return {
    type: SET_VALID,
    payload: valid
  }
}

const setRSum = (sum) => {
  return {
    type: SET_RSUM,
    payload: sum
  }
}

const setASum = (sum) => {
  return {
    type: SET_ASUM,
    payload: sum
  }
}

const setType = (type) => {
  return {
    type: SET_TYPE,
    payload: type
  }
}

const setN = (n) => {
  return {
    type: SET_N,
    payload: n
  }
}

const setEnd = (end) => {
  return {
    type: SET_END,
    payload: end
  }
}

const setStart = (start) => {
  return {
    type: SET_START,
    payload: start
  }
}

const setIntroVisible = (visible) => {
  return {
    type: SET_INTRO_VISIBLE,
    payload: visible
  }
}

export default math;

export {
  setIntroVisible,
  setExpression,
  setN,
  setRSum,
  setASum,
  setValid,
  setType,
  setEnd,
  setStart
};
