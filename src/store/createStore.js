import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {makeRootReducer} from './reducers';


export default () => {
  const initialState = {};
  const enhancers = [];
  const middleware = [
    thunk,
  ];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(
    makeRootReducer(),
    initialState,
    composedEnhancers
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default; // eslint-disable-line global-require

      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
};
