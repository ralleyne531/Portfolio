import React from 'react'
import './App.css';
import Sidebar from './Components/Sidebar'
import Header from './Components/HeaderComponent/Header.js'
import PorfolioSection from "./Components/PorfolioSection";
import Footer from "./Components/Footer";
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
          <Footer></Footer>
        </main>
      </div>
    </>
  );
}

export default App;
