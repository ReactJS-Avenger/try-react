import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HookCounter';
import HookCounterTwo from './components/HooksCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HooksCounter/> */}
      <HookCounterTwo/>
    </div>
  );
}

export default App;
