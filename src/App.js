import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HookCounter';
import HookCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      <HookMouse/>
    </div>
  );
}

export default App;
