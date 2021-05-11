import React from "react"
import Mainbar from "./snippets/mainbar"
import About from "./snippets/about"
import Resume from "./snippets/resume"
import Projects from "./snippets/projects"
import Sidebar from "./snippets/sidebar"
import {BrowserRouter as Router, Route,Redirect} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
        <div className="container"><div className="row">
        <div className="col-lg-3 ">
          <div className="side"><Sidebar /></div></div>
      <div className="col-lg-9 main">
      <Mainbar />
      
      <switch>
      <Route exact path="/">
        <About />
        </Route>
      <Route exact path="/resume" >
        <Resume  />
        </Route>
      <Route exact path="/Projects" >
        <Projects />
        </Route>
        <Route ><Redirect exact path = "/" /></Route>
        </switch>
       </div>
      </div></div>
     
      </div>
      
      </Router>
  );
}

export default App;
