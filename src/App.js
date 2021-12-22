
import './App.css';
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

import homePage from "./pages/HomePage.js"
import rosterPage from "./pages/RosterPage"
import AboutPage from "./pages/AboutPage"
import FacilitiesPage from './pages/FacilitiesPage';
import TicketsPage from './pages/TicketsPage';
import CoachesPage from './pages/CoachesPage';
import ContactPage from './pages/ContactPage';
import RecruitContact from './pages/RecruitmentContact';
import ContactDirect from './pages/ContactDirect';
const App = ()=> {
  return (
  <Router>

  <Switch>
    <Route exact path="/" page={"home"} component={homePage} />
    <Route exact path="/roster" page={"home"} component={rosterPage} />
    <Route exact path="/about" page={"home"} component={AboutPage} />
    <Route exact path="/facilities" page={"home"} component={FacilitiesPage} />
    <Route exact path="/schedule" page={"home"} component={TicketsPage} />
    <Route exact path="/coaches" page={"home"} component={CoachesPage} />
    <Route exact path="/contact" page={"home"} component={ContactPage} />
    <Route exact path="/contact/recruitment" page={"home"} component={RecruitContact} />
    <Route exact path="/contact/other" page={"home"} component={ContactDirect} />
    <Redirect to="/" /> {/* Path not matched */}
  </Switch>
</Router>
)
}

export default App;
