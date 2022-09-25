import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HookCounter';
import HookCounterTwo from './components/HooksCounterTwo';
import HookCounterThree from './components/HookCounterThree';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      {/* <HookCounterTwo/> */}
      <HookCounterThree/>
    </div>
  );
}

export default App;
