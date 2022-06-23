import FormInput from "./components/FormInput";

import './App.css'
import { useRef, useState } from "react";

function App() {
  //const [username, setUsername] = useState("")
  const usernameRef = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(usernameRef)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" refer={usernameRef}/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="password"/>
        <FormInput placeholder="something else"/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
