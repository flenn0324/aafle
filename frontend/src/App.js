import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Classic from "./pages/error/504-classic";
import Error504Modern from "./pages/error/504-modern";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Success from "./pages/auth/Success";
import IndexHome from "./pages/IndexHome";
import Rdv from "./pages/FunctionalPages/Rdv";
import ContactPage from "./pages/SitePages/ContactPage";
import FaqPage from "./pages/SitePages/FaqPage";
import Annuaire from "./pages/FunctionalPages/Annuaire";
import Formalites from "./pages/FunctionalPages/Formalites";
import Domiciliation from "./pages/FunctionalPages/Domiciliation";
import AppelOffre from "./pages/FunctionalPages/AppelOffre";
import NewUserPage from "./pages/auth/NewUserPage";

import AdminDashboard from "./pages/Dashboard/content/AdminDashboard";

import AdminLayouts from "./components/layouts/AdminLayouts";
import UserLayout from "./components/layouts/UserLayout";

import Profil from "./pages/ClientPanel/content/Profil/Profil";

import Prescripteurs from "./pages/Dashboard/content/Prescripteurs/Prescripteurs";
import CreatePrescripteur from "./pages/Dashboard/content/Prescripteurs/CreatePrescripteur";
import UpdatePrescripteur from "./pages/Dashboard/content/Prescripteurs/UpdatePrescripteur";
import ReadPrescripteur from "./pages/Dashboard/content/Prescripteurs/ReadPrescripteur";

import Societes from "./pages/Dashboard/content/Societes/Societes";
import AddSociete from "./pages/Dashboard/content/Societes/AddSociete";
import UpdateSociete from "./pages/Dashboard/content/Societes/UpdateSociete";
import ReadSociete from "./pages/Dashboard/content/Societes/ReadSociete";

import Etablissements from "./pages/Dashboard/content/Etablissements/Etablissements";
import AddEtablissement from "./pages/Dashboard/content/Etablissements/AddEtablissement";
import UpdateEtablissement from "./pages/Dashboard/content/Etablissements/UpdateEtablissement";
import ReadEtablissement from "./pages/Dashboard/content/Etablissements/ReadEtablissement";

import AdminAppeloffre from "./pages/Dashboard/content/Appeloffre/AdminAppeloffre";
import ReadAppeloffre from "./pages/Dashboard/content/Appeloffre/ReadAppeloffre";

import AdminFormalites from "./pages/Dashboard/content/AdminFormalites";
import Calendrier from "./pages/Dashboard/content/Calendrier";
import Demandesformalites from "./pages/Dashboard/content/Demandesformalites";
import Dirigeants from "./pages/Dashboard/content/Dirigeants/Dirigeants";

import MesDemandesformalites from "./pages/ClientPanel/content/MesDemandesformalites";
import MesAppeloffre from "./pages/ClientPanel/content/MesAppeloffre";
import Rdvs from "./pages/ClientPanel/content/Rdvs";
import MesDirigeants from "./pages/ClientPanel/content/Dirigeants/MesDirigeants";
import MesEtablissements from "./pages/ClientPanel/content/Etablissements/MesEtablissements";
import UpdateProfil from "./pages/ClientPanel/content/Profil/UpdateProfil";
import MesSocietes from "./pages/ClientPanel/content/Societes/MesSocietes";
import ClientAddSociete from "./pages/ClientPanel/content/Societes/ClientAddSociete";
import ClientUpdateSociete from "./pages/ClientPanel/content/Societes/ClientUpdateSociete";
import ClientReadSociete from "./pages/ClientPanel/content/Societes/ClientReadSociete";
import AddDirigeant from "./pages/Dashboard/content/Dirigeants/AddDirigeant";
import ReadDirigeant from "./pages/Dashboard/content/Dirigeants/ReadDirigeant";
import UpdateDirigeant from "./pages/Dashboard/content/Dirigeants/UpdateDirigeant";
import UpdateAppeloffre from "./pages/Dashboard/content/Appeloffre/UpdateAppeloffre";

import Location from "./section/formalites/immatriculation/morale/Sarl/Location";
import Creation from "./section/formalites/immatriculation/morale/Sarl/Creation";
import Apport from "./section/formalites/immatriculation/morale/Sarl/Apport";
import Achat from "./section/formalites/immatriculation/morale/Sarl/Achat";

import LocationSNC from "./section/formalites/immatriculation/morale/SNC/Location";
import CreationSNC from "./section/formalites/immatriculation/morale/SNC/Creation";
import ApportSNC from "./section/formalites/immatriculation/morale/SNC/Apport";
import AchatSNC from "./section/formalites/immatriculation/morale/SNC/Achat";

import LocationEURL from "./section/formalites/immatriculation/morale/EURL/Location";
import CreationEURL from "./section/formalites/immatriculation/morale/EURL/Creation";
import ApportEURL from "./section/formalites/immatriculation/morale/EURL/Apport";
import AchatEURL from "./section/formalites/immatriculation/morale/EURL/Achat";

import LocationSASU from "./section/formalites/immatriculation/morale/SASU/Location";
import CreationSASU from "./section/formalites/immatriculation/morale/SASU/Creation";
import ApportSASU from "./section/formalites/immatriculation/morale/SASU/Apport";
import AchatSASU from "./section/formalites/immatriculation/morale/SASU/Achat";

import LocationSACA from "./section/formalites/immatriculation/morale/SACA/Location";
import CreationSACA from "./section/formalites/immatriculation/morale/SACA/Creation";
import ApportSACA from "./section/formalites/immatriculation/morale/SACA/Apport";
import AchatSACA from "./section/formalites/immatriculation/morale/SACA/Achat";

import LocationSAS from "./section/formalites/immatriculation/morale/SAS/Location";
import CreationSAS from "./section/formalites/immatriculation/morale/SAS/Creation";
import ApportSAS from "./section/formalites/immatriculation/morale/SAS/Apport";
import AchatSAS from "./section/formalites/immatriculation/morale/SAS/Achat";

import CreationSELARL from "./section/formalites/immatriculation/morale/SELARL/Creation";
import ApportSELARL from "./section/formalites/immatriculation/morale/SELARL/Apport";
import AchatSELARL from "./section/formalites/immatriculation/morale/SELARL/Achat";

import CreationSELURL from "./section/formalites/immatriculation/morale/SELURL/Creation";
import ApportSELURL from "./section/formalites/immatriculation/morale/SELURL/Apport";
import AchatSELURL from "./section/formalites/immatriculation/morale/SELURL/Achat";

import LocationSADCS from "./section/formalites/immatriculation/morale/SADCS/Location";
import CreationSADCS from "./section/formalites/immatriculation/morale/SADCS/Creation";
import ApportSADCS from "./section/formalites/immatriculation/morale/SADCS/Apport";
import AchatSADCS from "./section/formalites/immatriculation/morale/SADCS/Achat";

import CreationSELASU from "./section/formalites/immatriculation/morale/SELASU/Creation";
import ApportSELASU from "./section/formalites/immatriculation/morale/SELASU/Apport";
import AchatSELASU from "./section/formalites/immatriculation/morale/SELASU/Achat";

import CreationSELAS from "./section/formalites/immatriculation/morale/SELAS/Creation";
import ApportSELAS from "./section/formalites/immatriculation/morale/SELAS/Apport";
import AchatSELAS from "./section/formalites/immatriculation/morale/SELAS/Achat";

import CreationSC from "./section/formalites/immatriculation/morale/SC/CreationSC";
import CreationSCCV from "./section/formalites/immatriculation/morale/SC/CreationSCCV";
import CreationSCP from "./section/formalites/immatriculation/morale/SC/CreationSCP";
import CreationSCM from "./section/formalites/immatriculation/morale/SC/CreationSCM";
import CreationSCI from "./section/formalites/immatriculation/morale/SC/CreationSCI";

function App() {
  return (
    <Suspense fallback={<div />}>
      <Router basename="/">
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<IndexHome />} />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/auths/auth-login`}
            element={<Login />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/auths/auth-register`}
            element={<NewUserPage />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`}
            element={<ForgotPassword />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/auths/auth-success`}
            element={<Success />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/error/404-classic`}
            element={<Error404Classic />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/error/404-modern`}
            element={<Error404Modern />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/error/504-classic`}
            element={<Error504Classic />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/error/504-modern`}
            element={<Error504Modern />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Rdv`}
            element={<Rdv />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Annuaire`}
            element={<Annuaire />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Formalites`}
            element={<Formalites />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Domiciliation`}
            element={<Domiciliation />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/FunctionalPages/AppelOffre`}
            element={<AppelOffre />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/SitePages/FaqPage`}
            element={<FaqPage />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/pages/SitePages/ContactPage`}
            element={<ContactPage />}
          />
          <Route path={`/unauthorized`} element={<Error404Classic />} />
          <Route path={`/admin`} element={<AdminLayouts />}>
            <Route path={`/admin`} element={<AdminDashboard />} />
            <Route
              path={`/admin/demandesformalites`}
              element={<Demandesformalites />}
            />
            <Route path={`/admin/calendrier`} element={<Calendrier />} />
            <Route path={`/admin/formalites`} element={<AdminFormalites />} />
            {/*Prescripteurs*/}
            <Route path={`/admin/users`} element={<Prescripteurs />} />
            <Route
              path={`/admin/prescripteurs/add`}
              element={<CreatePrescripteur />}
            />
            <Route
              path={`/admin/prescripteurs/update`}
              element={<UpdatePrescripteur />}
            />
            <Route
              path={`/admin/prescripteurs/read`}
              element={<ReadPrescripteur />}
            />
            {/*Societes*/}
            <Route path={`/admin/societes`} element={<Societes />} />
            <Route path={`/admin/societes/add`} element={<AddSociete />} />
            <Route
              path={`/admin/societes/update`}
              element={<UpdateSociete />}
            />
            <Route path={`/admin/societes/read`} element={<ReadSociete />} />
            {/*Etablissements*/}
            <Route path={`/admin/etablisements`} element={<Etablissements />} />
            <Route
              path={`/admin/etablisements/add`}
              element={<AddEtablissement />}
            />
            <Route
              path={`/admin/etablisements/update`}
              element={<UpdateEtablissement />}
            />
            <Route
              path={`/admin/etablisements/read`}
              element={<ReadEtablissement />}
            />
            {/*Dirigeants*/}
            <Route path={`/admin/dirigeants`} element={<Dirigeants />} />
            <Route path={`/admin/dirigeants/add`} element={<AddDirigeant />} />
            <Route
              path={`/admin/dirigeants/update`}
              element={<UpdateDirigeant />}
            />
            <Route
              path={`/admin/dirigeants/read`}
              element={<ReadDirigeant />}
            />
            {/*AppelOffres*/}
            <Route path={`/admin/appeloffres`} element={<AdminAppeloffre />} />
            <Route
              path={`/admin/appeloffres/update`}
              element={<UpdateAppeloffre />}
            />
            <Route
              path={`/admin/appeloffres/read`}
              element={<ReadAppeloffre />}
            />
          </Route>
          {/*USER*/}
          <Route path={`/user`} element={<UserLayout />}>
            <Route path={`/user`} element={<Profil />} />
            <Route path={`/user/dirigeants`} element={<MesDirigeants />} />
            <Route
              path={`/user/demandesformalites`}
              element={<MesDemandesformalites />}
            />
            <Route path={`/user/rdvs`} element={<Rdvs />} />
            <Route path={`/user/appeloffre`} element={<MesAppeloffre />} />
            {/*Prescripteurs*/}
            <Route path={`/user/profil/update`} element={<UpdateProfil />} />
            {/*Societes*/}
            <Route path={`/user/societes`} element={<MesSocietes />} />
            <Route path={`/user/societes/add`} element={<ClientAddSociete />} />
            <Route
              path={`/user/societes/update`}
              element={<ClientUpdateSociete />}
            />
            <Route
              path={`/user/societes/read`}
              element={<ClientReadSociete />}
            />
            {/*Etablissements*/}
            <Route
              path={`/user/etablissements`}
              element={<MesEtablissements />}
            />
          </Route>
          {/*FORMALITES **************** */}
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-a-responsabilite-limitee-sarl-location-gerance-fonds-de-commerce`}
            element={<Location />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-a-responsabilite-limitee-sarl-creation-fonds-de-commerce`}
            element={<Creation />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-a-responsabilite-limitee-sarl-achat-fonds-de-commerce`}
            element={<Achat />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-a-responsabilite-limitee-sarl-apport-fonds-de-commerce`}
            element={<Apport />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-en-nom-collectif-snc-location-gerance-fonds-de-commerce`}
            element={<LocationSNC />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-en-nom-collectif-snc-creation-fonds-de-commerce`}
            element={<CreationSNC />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-en-nom-collectif-snc-apport-fonds-de-commerce`}
            element={<ApportSNC />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-en-nom-collectif-snc-achat-fonds-de-commerce`}
            element={<AchatSNC />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-eurl-location-gerance-de-fonds-commerce`}
            element={<LocationEURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-eurl-creation-de-fonds-commerce`}
            element={<CreationEURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-eurl-apport-de-fonds-commerce`}
            element={<ApportEURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-eurl-achat-de-fonds-commerce`}
            element={<AchatEURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-sasu-location-gerance-de-fonds-commerce`}
            element={<LocationSASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-sasu-creation-de-fonds-commerce`}
            element={<CreationSASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-sasu-apport-de-fonds-commerce`}
            element={<ApportSASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/entreprise-unipersonnelle-a-responsabilite-limitee-sasu-achat-de-fonds-commerce`}
            element={<AchatSASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-conseil-d-administration-location-gerance`}
            element={<LocationSACA />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-conseil-d-administration-creation-gerance`}
            element={<CreationSACA />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-conseil-d-administration-apport-gerance`}
            element={<ApportSACA />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-conseil-d-administration-achat-gerance`}
            element={<AchatSACA />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-par-actions-simplifiee-sas-location-gerance-fonds-de-commerce`}
            element={<LocationSAS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-par-actions-simplifiee-sas-creation-fonds-de-commerce`}
            element={<CreationSAS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-par-actions-simplifiee-sas-apport-fonds-de-commerce`}
            element={<ApportSAS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-par-actions-simplifiee-sas-achat-fonds-de-commerce`}
            element={<AchatSAS />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-a-responsabilite-limitee-selarl-creation-fonds-de-commerce`}
            element={<CreationSELARL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-a-responsabilite-limitee-selarl-apport-fonds-de-commerce`}
            element={<ApportSELARL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-a-responsabilite-limitee-selarl-achat-fonds-de-commerce`}
            element={<AchatSELARL />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-unipersonnelle-a-responsabilite-limitee-selurl-creation-fonds-de-commerce`}
            element={<CreationSELURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-unipersonnelle-a-responsabilite-limitee-selurl-apport-fonds-de-commerce`}
            element={<ApportSELURL />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-unipersonnelle-a-responsabilite-limitee-selurl-achat-fonds-de-commerce`}
            element={<AchatSELURL />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-directoire-et-conseil-de-surveillance-creation-fonds-de-commerce`}
            element={<CreationSADCS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-directoire-et-conseil-de-surveillance-apport-fonds-de-commerce`}
            element={<ApportSADCS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-directoire-et-conseil-de-surveillance-achat-fonds-de-commerce`}
            element={<AchatSADCS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-anonyme-a-directoire-et-conseil-de-surveillance-location-gerance-fonds-de-commerce`}
            element={<LocationSADCS />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-unipersonnelle-selasu-creation-fonds-de-commerce`}
            element={<CreationSELASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-unipersonnelle-selasu-apport-fonds-de-commerce`}
            element={<ApportSELASU />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-unipersonnelle-selasu-achat-fonds-de-commerce`}
            element={<AchatSELASU />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-selas-creation-fonds-de-commerce`}
            element={<CreationSELAS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-selas-apport-fonds-de-commerce`}
            element={<ApportSELAS />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-d-exercice-liberal-par-actions-simplifiee-selas-achat-fonds-de-commerce`}
            element={<AchatSELAS />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-civile-creation`}
            element={<CreationSC />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-civile-de-moyen-scm-creation`}
            element={<CreationSCM />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-civile-de-construction-vente-sccv-creation`}
            element={<CreationSCCV />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-civile-immobiliere-sci-creation`}
            element={<CreationSCI />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/Immatriculation/personne-morale/societe-civile-professionnelle-scp-creation`}
            element={<CreationSCP />}
          />

          <Route
            path={`${process.env.PUBLIC_URL}/Modification/personne-morale/sadcsensas`}
            element={<CreationSCP />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
