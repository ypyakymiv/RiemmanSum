const SET_EXPRESSION = 'SET_EXPRESSION';
const SET_VALID = 'SET_VALID';
const SET_SUM = 'SET_SUM';
const SET_N = 'SET_N';
const SET_TYPE = 'SET_TYPE';
const SET_START = 'SET_START';
const SET_END = 'SET_END';

const initialState = {
  expression: null,
  valid: false,
  n: 1,
  sum: null,
  start: -5,
  end: 5,
  type: 'center'
}

const math = (state = initialState, action) => {
  switch(action.type) {
    case SET_EXPRESSION:
      return Object.assign({}, state, {expression: action.payload});
    case SET_VALID:
      return Object.assign({}, state, {valid: action.payload});
    case SET_SUM:
      return Object.assign({}, state, {sum: action.payload});
    case SET_N:
      return Object.assign({}, state, {n: action.payload});
    case SET_TYPE:
      return Object.assign({}, state, {type: action.payload});
    case SET_START:
      return Object.assign({}, state, {start: action.payload});
    case SET_END:
      return Object.assign({}, state, {end: action.payload});
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

const setSum = (sum) => {
  return {
    type: SET_SUM,
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

export default math;

export {
  setExpression,
  setN,
  setSum,
  setValid,
  setType,
  setEnd,
  setStart
};
