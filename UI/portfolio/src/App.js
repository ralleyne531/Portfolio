import './App.css';
import React from 'react'

function App() {
  const[isSidebarHidden, setIsSidebarHidden] = React.useState(true)
  const toggleSidebar = () => {
    if(isSidebarHidden){
      setIsSidebarHidden(false)
    }else{
      setIsSidebarHidden(true)
    }
  }

  return (
    <>
    <div className="App">
      <navbar>
        Nav
        <button onClick={toggleSidebar}>Button</button>
      </navbar>
      <aside class={isSidebarHidden ? "" : 'show'}>side</aside>
      <main>
      Main
      </main>
      <footer>footer</footer>
    </div>
    </>
  );
}

export default App;
