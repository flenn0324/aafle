import React, { Suspense } from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Error404Classic from "./pages/error/404-classic"
import Error404Modern from "./pages/error/404-modern"
import Error504Classic from "./pages/error/504-classic"
import Error504Modern from "./pages/error/504-modern"
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword"
import Success from "./pages/auth/Success";
import index from "./pages/IndexHome";
import rdv from "./pages/FunctionalPages/Rdv";
import contactpage from "./pages/SitePages/ContactPage"
import faqpage from "./pages/SitePages/FaqPage"
import annuaire from "./pages/FunctionalPages/Annuaire"
import formalites from "./pages/FunctionalPages/Formalites"
import domiciliation from "./pages/FunctionalPages/Domiciliation"
import appeloffre from "./pages/FunctionalPages/AppelOffre"
import NewUserPage from "./pages/auth/NewUserPage"

function App() {
  return (
    <Suspense fallback={<div/>}>
      <Router basename="/">
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={index} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-login`} component={Login} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-register`} component={NewUserPage} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`} component={ForgotPassword} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-success`} component={Success} exact/>
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-classic`} component={Error404Classic} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-modern`} component={Error404Modern} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-classic`} component={Error504Classic} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-modern`} component={Error504Modern} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Rdv`} component={rdv} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Annuaire`} component={annuaire} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Formalites`} component={formalites} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Domiciliation`} component={domiciliation} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/AppelOffre`} component={appeloffre} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/SitePages/FaqPage`} component={faqpage} exact />
          <Route path={`${process.env.PUBLIC_URL}/pages/SitePages/ContactPage`} component={contactpage} exact />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
