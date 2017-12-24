import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import storage from 'redux-persist/es/storage';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './app/reducers';
import { CoreLayout, Home } from './app/components';
const config = {
  key: 'root',
  storage
};

const reducer = persistCombineReducers(config, {
  ...reducers,
  routing: routerReducer
});

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);

const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <div>
            <Router history={history}>
              <Route path="/" component={CoreLayout}>
                <IndexRoute component={Home} />
                <Route path="/home" component={Home} />
              </Route>
            </Router>
          </div>
        </Provider>
      </PersistGate>
    );
  }
}

export default App;
