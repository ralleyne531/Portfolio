import './App.css';
import Sidebar from './Components/Sidebar'
import Hero from './Components/Hero.js'
import React from 'react'
function App() {
  const[isSidebarHidden, setIsSidebarHidden] = React.useState(true)
  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  }

  return (
    <>
      <div className="App">
        <Hero toggleSidebar={toggleSidebar}/>
        <aside className={isSidebarHidden ? " " : "show"}>
          <Sidebar/>
        </aside>
        <main>
          Hello World ~ main
          <h1>Lorem ipsum odor amet, consectetuer adipiscing elit. Ornare magna nam inceptos sollicitudin morbi tincidunt lacinia fusce. Varius penatibus posuere purus integer consectetur praesent. Varius malesuada sagittis ridiculus lacinia suspendisse diam morbi sociosqu adipiscing. Aliquam urna efficitur faucibus nibh id arcu ultricies interdum. Nostra sem egestas nisl tortor torquent habitasse.

            Neque metus sodales ridiculus est imperdiet. Cubilia integer dapibus non vivamus phasellus maximus. Pharetra ligula etiam nullam accumsan potenti etiam fames cras. Massa iaculis taciti eleifend, justo varius purus. Inceptos erat blandit cursus, ipsum ligula himenaeos. Ipsum phasellus semper aptent fames platea a. Amassa enim sagittis interdum porta scelerisque iaculis. Maximus placerat duis ultricies nec ullamcorper.

            Inceptos sollicitudin dictumst morbi ex phasellus; primis curabitur sit. Tempor augue sapien arcu fermentum fermentum nam nascetur. Lacinia cursus fusce erat vel cubilia varius habitasse. Aenean pellentesque nulla taciti varius etiam finibus. Himenaeos porttitor scelerisque fringilla velit leo posuere sit tortor. Scelerisque semper imperdiet lectus quam sed.

            Fermentum lacus fermentum torquent sollicitudin cras ultrices. Laoreet rutrum cubilia lacus posuere sociosqu. Consectetur commodo congue posuere tincidunt; eget magnis est. Nec posuere rhoncus rutrum auctor volutpat fames congue. Tortor odio hendrerit urna ullamcorper mollis porta blandit proin. Nisi arcu morbi nunc sociosqu penatibus leo natoque maximus. Condimentum cras viverra vehicula eu ac lectus. Massa efficitur sodales parturient inceptos tempor habitasse congue et. Sit porttitor mi ultrices parturient dictum urna dui euismod.

            Posuere sodales est congue dui dictum euismod mollis. Lectus primis taciti blandit vel metus. Nec maecenas vestibulum praesent fringilla; libero torquent nunc vulputate. Taciti porttitor est erat taciti laoreet euismod cursus odio. Dictum efficitur nunc elementum fermentum nam vel. Nam tortor rhoncus vulputate tempus cubilia cras mauris donec pretium. Finibus torquent nec sociosqu ipsum, gravida leo. Lobortis litora ante aliquet sapien odio cursus eleifend. At aptent cubilia finibus proin arcu auctor fringilla sed. Laoreet ultrices quisque turpis non natoque nisl fusce suscipit.</h1>
        </main>
        <footer>Hello World ~footer</footer>
      </div>
    </>
  );
}

export default App;
