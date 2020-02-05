import React from "react";
import { render } from "react-dom";
import Fade from 'react-reveal/Fade';
// 
// REDUX + SAGA
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
// 
// COMPONENTS
import Counter from "./Counter/Counter";
import Hello from "./Hello/Hello";
import Loading from "./Loading/Loading";
// 
// STORE
import { DECREMENT_BALANCE, INCREMENT_BALANCE } from './store/actions';
import balance from "./store/reducers";
import rootSaga from "./store/sagas";
// 
// GLOBAL Styled components
import GlobalStyles from "./styles/global";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(balance, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

const App = () => (
  <div>
    <GlobalStyles />

    <Hello name="Vodafone IoT" />

    <Fade when={store.getState().loading} collapse>
      <Loading />
    </Fade>

    <Fade when={!store.getState().loading} collapse>
      <Counter
        currency={store.getState().data.currency}
        value={store.getState().data.balance}
        onIncrement={() => {
          action(INCREMENT_BALANCE);
        }}
        onDecrement={() => {
          action(DECREMENT_BALANCE);
        }}
      />
    </Fade>
  </div>
);

function renderApp() {
  render(<App />, document.getElementById("root"));
}

renderApp();
store.subscribe(renderApp);
