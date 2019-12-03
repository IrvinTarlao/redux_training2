import React from 'react';
import './App.css';
import { Provider } from  'react-redux';
import { createStore } from  'redux';
import Result from './Containers/Result'

function App() {
  const houses = ['Serpentard','Griffondor','Serdaigle','Pouffsoufle'];

  const reducer = (state = {houses: houses, selectedHouse: "serpentard"}, action,) => {
    switch (action.type) {
      case 'UPDATE_CHOICE_WITH_MY_INDEX':
          return {...state, selectedHouse: houses[action.indexSelected]};
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  
  // houses,
  // selectedHouse: houses[Math.floor(Math.random() * 4)]

  return (
      <div>
        <Provider store={store}>
          <Result />
        </Provider>
      </div>
    )
}

export default App;
