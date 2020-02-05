import { FETCH_BALANCE, FETCH_BALANCE_SUCCESS, FETCH_BALANCE_ERROR, INCREMENT_BALANCE, DECREMENT_BALANCE } from './actions'

const _state = {
  data: {
    balance: 0,
    currency: "",
    name: ""
  },
  loading: false,
  error: null,
};

function balance(state = _state, action) {
  switch (action.type) {
    case FETCH_BALANCE:
      return { ...state, loading: true };
    case FETCH_BALANCE_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case FETCH_BALANCE_ERROR:
      return { ...state, error: action.error, pending: false };
    case INCREMENT_BALANCE:
      state.data = { ...state.data, balance: state.data.balance + 1 };
      return state;
    case DECREMENT_BALANCE:
      state.data = { ...state.data, balance: state.data.balance - 1 };
      return state;
    default:
      return state;
  }
};

export default balance;