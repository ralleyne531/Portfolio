import './App.css';
import Sidebar from './Components/SidebarComponent/Sidebar'
import Header from './Components/HeaderComponent/header.js'
import React from 'react'
import PorfolioSection from "./Components/PorfolioSection";
function App() {
  const[isSidebarHidden, setIsSidebarHidden] = React.useState(true)
  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  }

  return (
    <>
      <div className="App">
        <Header toggleSidebar={toggleSidebar}/>
        <aside className={isSidebarHidden ? " " : "show"}>
          <Sidebar/>
        </aside>
        <main>
          <PorfolioSection className={"hero"}/>
          <PorfolioSection className={"about"}/>
          <PorfolioSection className={"experience"}/>
          <PorfolioSection className={"projects"}/>
          <PorfolioSection className={"skills"}/>
          <PorfolioSection className={"interests"}/>
          <footer>Hello World ~footer</footer>
        </main>

      </div>
    </>
  );
}

export default App;
