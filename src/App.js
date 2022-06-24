import { useState } from 'react';
import './App.css'
import Table from './Table';
import { Users } from './user'

function App() {
  const [query, setQuery] = useState('');
 const keys = ["first_name", "last_name", "email"];


  const search = (data) => {
    return data.filter((item) =>
      // item.first_name.toLowerCase().includes(query) ||
      // item.last_name.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query))
      keys.some((key)=> item[key].toLowerCase().includes(query)))
  }

  return (
    <div className="app">
      <input type="text" placeholder='search...' className='search' onChange={e => setQuery(e.target.value)} />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
