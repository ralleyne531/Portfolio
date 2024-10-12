import './App.css';
import Sidebar from './Components/Sidebar'
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
      <aside className={isSidebarHidden ? "" : 'show'}>
        <Sidebar/>
        </aside>
      <main>
      Main
      </main>
      <footer>footer</footer>
    </div>
    </>
  );
}

export default App;
