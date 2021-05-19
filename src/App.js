import React from "react";
import Header from "./Header Components/Header";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer Components/Footer";
import HeaderBlock from "./HeaderBlock/HeaderBlock";
import ProgrammingSkillsBlock from "./Programming Skills Components/ProgrammingSkillsBlock";
import DetailsBlock from "./Details Components/DetailsBlock";
import WorkBlock from "./Work Components/WorkBlock";
import Projects from "./Projects Components/Projects";
import ProjectsYM from "./Projects Components/ProjectsYM";
import ProjectsMC2 from "./Projects Components/ProjectsMC2";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Fade>
              <HeaderBlock />
            </Fade>
            <Footer />
          </Route>

          <Route exact path="/programmingskills">
            <Header />
            <ProgrammingSkillsBlock />
            <Footer />
          </Route>

          <Route exact path="/projects">
            <Header />
            <Projects />
            <Footer />
          </Route>

          <Route exact path="/workexperience">
            <Header />
            <WorkBlock />
            <Footer />
          </Route>

          <Route exact path="/details">
            <Header />
            <DetailsBlock />
            <Footer />
          </Route>

          <Route exact path="/yogamountain">
            <Header />
            <ProjectsYM />
            <Footer />
          </Route>

          <Route exact path="/mcdonald's">
            <Header />
            <ProjectsMC2 />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
