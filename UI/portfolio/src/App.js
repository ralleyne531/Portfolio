import './App.css';
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero'
import React from 'react'


function App() {
  const[isSidebarHidden, setIsSidebarHidden] = React.useState(true)
  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  }

  return (
    <>
    <div className="App">
      <Hero toggleSidebar = {toggleSidebar} />

      <aside className={isSidebarHidden ? " " : "show"}>
        <Sidebar/>
      </aside>

      <main>
      Mainl
      </main>
      <footer>footer</footer>
    </div>
    </>
  );
}

export default App;
