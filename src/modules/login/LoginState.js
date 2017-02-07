import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';
import {get} from '../../utils/api';

// Initial state
const initialState = Map({
  value: 0,
  loading: false,
  time:0
});

var postData = "";

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RESET = 'CounterState/RESET';
const RANDOM_REQUEST = 'CounterState/RANDOM_REQUEST';
const RANDOM_RESPONSE = 'CounterState/RANDOM_RESPONSE';
const FULLEMAIL = 'CounterState/FULLEMAIL';
const CHENGECODE = 'CounterState/CHENGECODE';
const CHANGEPWD = 'CounterState/CHANGEPWD';
const CHANGECODE = 'CounterState/CHANGECODE';
const HANDLERLOGIN = 'CounterState/HANDLERLOGIN';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function reset() {
  return {type: RESET};
}


export function handlerLogin(data) {
  postData = "/user/publicLogin?email=" + data.email + "&password=" + data.password + "&code=" + data.code;
  return {
    type: RANDOM_REQUEST,
    data:data
  };
}


export async function apiLogin() {
  return {
    type: RANDOM_RESPONSE,
    payload: await get(postData,false)
  };
}

export function fullEmail(email) {
  return {
    type: FULLEMAIL,
    email:email
  };
}

export function changeCode() {
  return {
    type: CHENGECODE
  };
}

export function fullPassword(password) {
  return {
    type: CHANGEPWD,
    password:password
  }; 
}

export function fullCode(code) {
  return {
    type: CHANGECODE,
    code:code
  }; 
}

// Reducer
export default function CounterStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case RESET:
      return initialState;

    case FULLEMAIL:
      return state.set("email",action.email);

    case CHENGECODE:
      return state.update('time', time => time + 1);

    case CHANGEPWD:
      return state.set("password",action.password);

    case CHANGECODE:
      return state.set("code",action.code);

    case RANDOM_REQUEST:
      return loop(
        state.set('loading', true),
        Effects.promise(apiLogin)
      );

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('responseData', action.payload);

    default:
      return state;
  }
}
