import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  subscriptionReducer,
  initialState as  subscriptionInitialState,
} from './reducers/subscriptionReducer';

const reducer = combineReducers({
  subscription: subscriptionReducer

});

const initialState = {
  subscription: {
    ...subscriptionInitialState,
  }

};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
