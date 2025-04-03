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
          <PorfolioSection id="hero" className={"hero"}/>
          <PorfolioSection id="about" className={"about"}/>
          <PorfolioSection id="experience" className={"experience"}/>
          <PorfolioSection id="projects" className={"projects"}/>
          <PorfolioSection id="skills" className={"skills"}/>
          <PorfolioSection id="interests" className={"interests"}/>
          <Footer></Footer>
          <a
              href={"#hero"}
              id="top"
              style={{ display: "block" }}
          >
            🔝 Top
          </a>
        </main>
      </div>
    </>
  );
}

export default App;
