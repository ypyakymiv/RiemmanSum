import math from './math';
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';

const logger = createLogger({

});

export default createStore(math, applyMiddleware(logger));
