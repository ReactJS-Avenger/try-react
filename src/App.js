import logo from './logo.svg';
import React from "react";
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HookCounter';
import HookCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/contextexample/ComponentC';
import CounterOneReducer from './components/useReducerExample/CounterOneReducer';
import CounterTwoReducer from './components/useReducerExample/CounterTwoReducer';
import CounterThreeReducer from './components/useReducerExample/CounterThreeUseReducer';
import MainComponent from './components/useReducer+useContext/MainComponent';
import DataFetchingOne from './components/useReducerFetchData/DataFetchingOne';

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <userContext.Provider value={'shubham'}>
        <channelContext.Provider value={'codevolution'}>
        <ComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}
      {/* <CounterOneReducer/> */}
      {/* <CounterTwoReducer/> */}
      {/* <CounterThreeReducer/> */}
      {/* <MainComponent/> */}
      <DataFetchingOne/>
    </div>
  );
}

export default App;
