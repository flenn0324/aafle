import React, { Suspense } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Error404Classic from "./pages/error/404-classic"
import Error404Modern from "./pages/error/404-modern"
import Error504Classic from "./pages/error/504-classic"
import Error504Modern from "./pages/error/504-modern"
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword"
import Success from "./pages/auth/Success";
import IndexHome from "./pages/IndexHome";
import Rdv from "./pages/FunctionalPages/Rdv";
import ContactPage from "./pages/SitePages/ContactPage"
import FaqPage from "./pages/SitePages/FaqPage"
import Annuaire from "./pages/FunctionalPages/Annuaire"
import Formalites from "./pages/FunctionalPages/Formalites"
import Domiciliation from "./pages/FunctionalPages/Domiciliation"
import AppelOffre from "./pages/FunctionalPages/AppelOffre"
import NewUserPage from "./pages/auth/NewUserPage"

import AdminDashboard from "./pages/Dashboard/content/AdminDashboard"

import AdminLayouts from "./components/layouts/AdminLayouts"
import UserLayout from "./components/layouts/UserLayout"

import Profil from "./pages/ClientPanel/content/Profil/Profil"

import Prescripteurs from "./pages/Dashboard/content/Prescripteurs/Prescripteurs"
import CreatePrescripteur from "./pages/Dashboard/content/Prescripteurs/CreatePrescripteur"
import UpdatePrescripteur from "./pages/Dashboard/content/Prescripteurs/UpdatePrescripteur"
import ReadPrescripteur from "./pages/Dashboard/content/Prescripteurs/ReadPrescripteur"

import Societes from "./pages/Dashboard/content/Societes/Societes"
import AddSociete from "./pages/Dashboard/content/Societes/AddSociete"
import UpdateSociete from "./pages/Dashboard/content/Societes/UpdateSociete"
import ReadSociete from "./pages/Dashboard/content/Societes/ReadSociete"

import Etablissements from "./pages/Dashboard/content/Etablissements/Etablissements"
import AddEtablissement from "./pages/Dashboard/content/Etablissements/AddEtablissement"
import UpdateEtablissement from "./pages/Dashboard/content/Etablissements/UpdateEtablissement"
import ReadEtablissement from "./pages/Dashboard/content/Etablissements/ReadEtablissement"

import AdminAppeloffre from "./pages/Dashboard/content/Appeloffre/AdminAppeloffre"
import ReadAppeloffre from "./pages/Dashboard/content/Appeloffre/ReadAppeloffre"

import AdminFormalites from "./pages/Dashboard/content/AdminFormalites"
import Calendrier from "./pages/Dashboard/content/Calendrier"
import Demandesformalites from "./pages/Dashboard/content/Demandesformalites"
import Dirigeants from "./pages/Dashboard/content/Dirigeants/Dirigeants"

import MesDemandesformalites from "./pages/ClientPanel/content/MesDemandesformalites"
import MesAppeloffre from "./pages/ClientPanel/content/MesAppeloffre"
import Rdvs from "./pages/ClientPanel/content/Rdvs"
import MesDirigeants from "./pages/ClientPanel/content/Dirigeants/MesDirigeants"
import MesEtablissements from "./pages/ClientPanel/content/Etablissements/MesEtablissements"
import UpdateProfil from "./pages/ClientPanel/content/Profil/UpdateProfil"
import MesSocietes from "./pages/ClientPanel/content/Societes/MesSocietes"
import ClientAddSociete from "./pages/ClientPanel/content/Societes/ClientAddSociete"
import ClientUpdateSociete from "./pages/ClientPanel/content/Societes/ClientUpdateSociete"
import ClientReadSociete from "./pages/ClientPanel/content/Societes/ClientReadSociete"
import AddDirigeant from "./pages/Dashboard/content/Dirigeants/AddDirigeant"
import ReadDirigeant from "./pages/Dashboard/content/Dirigeants/ReadDirigeant"
import UpdateDirigeant from "./pages/Dashboard/content/Dirigeants/UpdateDirigeant"
import UpdateAppeloffre from "./pages/Dashboard/content/Appeloffre/UpdateAppeloffre"


function App() {
  return (
    <Suspense fallback={<div/>}>
      <Router basename="/">
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<IndexHome/>} />
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-login`} element={<Login/>} />
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-register`} element={<NewUserPage/>} />
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`} element={<ForgotPassword/>} />
          <Route path={`${process.env.PUBLIC_URL}/pages/auths/auth-success`} element={<Success/>} />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-classic`} element={<Error404Classic/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/404-modern`} element={<Error404Modern/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-classic`} element={<Error504Classic/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/error/504-modern`} element={<Error504Modern/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Rdv`} element={<Rdv/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Annuaire`} element={<Annuaire/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Formalites`} element={<Formalites/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Domiciliation`} element={<Domiciliation/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/AppelOffre`} element={<AppelOffre/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/SitePages/FaqPage`} element={<FaqPage/>}  />
          <Route path={`${process.env.PUBLIC_URL}/pages/SitePages/ContactPage`} element={<ContactPage/>}  />
          <Route path={`/admin`} element={<AdminLayouts/>}>
            <Route path={`/admin`} element={<AdminDashboard/>} />
            <Route path={`/admin/demandesformalites`} element={<Demandesformalites/>} />
            <Route path={`/admin/calendrier`} element={<Calendrier/>} />
            <Route path={`/admin/formalites`} element={<AdminFormalites/>} />
            {/*Prescripteurs*/}
            <Route path={`/admin/users`} element={<Prescripteurs/>} />
            <Route path={`/admin/prescripteurs/add`} element={<CreatePrescripteur/>} />
            <Route path={`/admin/prescripteurs/update`} element={<UpdatePrescripteur/>} />
            <Route path={`/admin/prescripteurs/read`} element={<ReadPrescripteur/>} />
            {/*Societes*/}
            <Route path={`/admin/societes`} element={<Societes/>} />
            <Route path={`/admin/societes/add`} element={<AddSociete/>} />
            <Route path={`/admin/societes/update`} element={<UpdateSociete/>} />
            <Route path={`/admin/societes/read`} element={<ReadSociete/>} />
            {/*Etablissements*/}
            <Route path={`/admin/etablisements`} element={<Etablissements/>} />
            <Route path={`/admin/etablisements/add`} element={<AddEtablissement/>} />
            <Route path={`/admin/etablisements/update`} element={<UpdateEtablissement/>} />
            <Route path={`/admin/etablisements/read`} element={<ReadEtablissement/>} />
            {/*Dirigeants*/}
            <Route path={`/admin/dirigeants`} element={<Dirigeants/>} />
            <Route path={`/admin/dirigeants/add`} element={<AddDirigeant/>} />
            <Route path={`/admin/dirigeants/update`} element={<UpdateDirigeant/>} />
            <Route path={`/admin/dirigeants/read`} element={<ReadDirigeant/>} />
            {/*AppelOffres*/}
            <Route path={`/admin/appeloffres`} element={<AdminAppeloffre/>} />
            <Route path={`/admin/appeloffres/update`} element={<UpdateAppeloffre/>} />
            <Route path={`/admin/appeloffres/read`} element={<ReadAppeloffre/>} />
          </Route>
{/*USER*/}
          <Route path={`/user`} element={<UserLayout/>}>
            <Route path={`/user`} element={<Profil/>} />
            <Route path={`/user/dirigeants`} element={<MesDirigeants/>} />
            <Route path={`/user/demandesformalites`} element={<MesDemandesformalites/>} />
            <Route path={`/user/rdvs`} element={<Rdvs/>} />
            <Route path={`/user/appeloffre`} element={<MesAppeloffre/>} />
            {/*Prescripteurs*/}
            <Route path={`/user/profil/update`} element={<UpdateProfil/>} />
            {/*Societes*/}
            <Route path={`/user/societes`} element={<MesSocietes/>} />
            <Route path={`/user/societes/add`} element={<ClientAddSociete/>} />
            <Route path={`/user/societes/update`} element={<ClientUpdateSociete/>} />
            <Route path={`/user/societes/read`} element={<ClientReadSociete/>} />
            {/*Etablissements*/}
            <Route path={`/user/etablissements`} element={<MesEtablissements/>} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
