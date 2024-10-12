import './App.css';
import Hero from "./Components/Hero";
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
      <hero>
        <Hero/>
        <button onClick={toggleSidebar}>Button</button>
      </hero>
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
