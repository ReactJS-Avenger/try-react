import FormInput from "./components/FormInput";

import './App.css'
import { useRef, useState } from "react";

function App() {
  //const [username, setUsername] = useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries))
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username"/>
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="password" placeholder="password"/>
        <FormInput name="something" placeholder="something else"/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
