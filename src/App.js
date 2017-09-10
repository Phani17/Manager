import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
      const config = {
            apiKey: "AIzaSyAIR2ctbCRQt3SAs4x6z50A0A0BR0Ci8Rg",
            authDomain: "manager-58d0d.firebaseapp.com",
            databaseURL: "https://manager-58d0d.firebaseio.com",
            projectId: "manager-58d0d",
            storageBucket: "manager-58d0d.appspot.com",
            messagingSenderId: "152862216100"
      };
      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
