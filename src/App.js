import React, { useState } from 'react';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const opneModal = () =>{
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  return(
    <div className='App'>
      {isOpen && (
        <>
        <div className='overlay'></div>
        <div className='modal'>
          <header className='modal_header'>
            <h2>Modal title</h2>
            <button onClick={closeModal} className='close-button'>&times;</button>
          </header>
          <main className='modal_main'>
            <p> some conatnt here</p>
          </main>
        </div>
        </>
      )}

      <button onClick={opneModal}>Open modal</button>
    </div>
  )
}

export default App;
