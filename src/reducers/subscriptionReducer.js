import {
    SUBSCRIPTION_CREATED_SUCCESS,
    SUBSCRIPTION_CREATED_FAIL,
  } from '../constants/subscriptionConstants';
  
  export const REQUEST_STATUS = {
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
  };
  
  export const initialState = {
    status: REQUEST_STATUS.IDLE,
    error: null,
    data: {},
  };
  
  export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
      case  SUBSCRIPTION_CREATED_SUCCESS:
        return {
          status: REQUEST_STATUS.SUCCEEDED,
          data: action.payload,
        };
      case  SUBSCRIPTION_CREATED_FAIL:
        return {
          status: REQUEST_STATUS.SUCCEEDED,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const selectManageproxyStatus = (state) => ({
    status: state.subscription.status,
    error: state.subscription.error,
    data: state.subscription.data,
  });