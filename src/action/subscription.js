import { BEGIN_REQUEST } from '../constants/commonConstants';
import {
    SUBSCRIPTION_CREATED_SUCCESS,
    SUBSCRIPTION_CREATED_FAIL,
} from '../constants/subscriptionConstants';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const AddSubScription = (email, callback) => async (dispatch) => {
    try {
        dispatch({
            type: BEGIN_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axiosInstance.post(
            `/api/subscription`,
            { email },
            config
        );
        dispatch({
            type: SUBSCRIPTION_CREATED_SUCCESS,
            payload: data,
        });
        callback(true);
    } catch (error) {
        dispatch({
            type: SUBSCRIPTION_CREATED_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
        callback(false);
    }
};

