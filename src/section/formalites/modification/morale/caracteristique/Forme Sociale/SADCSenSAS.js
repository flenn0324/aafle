import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";

const SADCSenSAS = (props) => {
  const authToken = localStorage.getItem("accessToken");

  const handleDownloadPDF = () => {
    const content = document.getElementById("pdf-content");
    const pdfOptions = {
      margin: 10,
      filename: "Transformation SADCS en SAS.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { avoid: ".page-break" }, // Utilisez la classe CSS pour éviter les sauts de page
    };
    html2pdf().from(content).set(pdfOptions).save();
  };

  useEffect(() => {
    const disableRightClick = (event) => {
      if (event.button === 2) {
        event.preventDefault();
      }
    };

    const disableTextSelection = () => {
      document.addEventListener("selectstart", preventDefaultHandler);
      document.addEventListener("contextmenu", preventDefaultHandler);
    };

    const preventDefaultHandler = (event) => {
      event.preventDefault();
    };

    // Attacher les gestionnaires d'événements lors du montage du composant
    document.addEventListener("contextmenu", disableRightClick);
    disableTextSelection();

    // Nettoyer les gestionnaires d'événements lors du démontage du composant
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", preventDefaultHandler);
      document.removeEventListener("contextmenu", preventDefaultHandler);
    };
  }, [authToken]);

  return (
    <Container className="justify-content-center bg-white p-5 border my-5">
      <Helmet>
        <title>
          Transformation SA à Directoire et Conseil de Surveillance en SAS
        </title>
        <meta
          name="keywords"
          content="annonces-formalites-modification-personne-morale-transformation-sas-sa-directoire-conseil-de-surveillance/societe-unipersonnelle-a-responsabilite-limitee-eurl_societe-à-responsabilite-limitee-sarl_modification-societe-par-actions-sa-sas-sasu_societe-parts-sociales-sci-scm-scp-snc"
        />
      </Helmet>
      <p className="mb-5">
        Accueil /Modification/personne-morale/Transformation SA à Directoire et
        Conseil de Suveillance en SAS
      </p>
      <div id="pdf-content">
        <h2 className="text-center mb-3">
          Transformation SA à Directoire et Conseil de Suveillance en SAS
        </h2>
        <div className="my-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Un exemplaire de l’assemblée générale extraordinaire nommant le
              commissaire à la transformation, certifié conforme par le
              représentant légal ;
            </li>
            <li class="list-group-item">
              Un exemplaire du rapport du commissaire à la transformation, daté
              et signé ;
            </li>
            <li class="list-group-item">
              Trois exemplaires de l’assemblée générale extraordinaire décidant
              la transformation de la société en société anonyme et nommant les
              commissaires aux comptes titulaire et suppléant, certifié conforme
              par le représentant légal ;
            </li>
            <li class="list-group-item">
              Un exemplaire du procès-verbal des membres du conseil de
              surveillance désignant le Président et le Vice-président ;{" "}
            </li>
            <li class="list-group-item">
              Un exemplaire du procès-verbal des membres du directoire désignant
              le Président ou, le cas échéant, le Directeur général unique ;{" "}
            </li>
            <li class="list-group-item">
              Un exemplaire des statuts mis à jour corrélativement, daté et
              certifié conforme par le représentant légal ;{" "}
            </li>
            <li class="list-group-item">
              Un exemplaire de la lettre d’acceptation de mission des
              Commissaires aux comptes titulaire et suppléant accompagné d’un
              justificatif d’inscription sur l’annuaire de la Compagnie ;{" "}
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h3 className="my-3">
            Pour les membres du directoire, le Président du directoire ou, le
            cas échéant, le Directeur général unique, le Président du conseil de
            surveillance, le Vice-président du conseil de surveillance, les
            membres du conseil de surveillance personnes physiques nommées{" "}
          </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Une copie recto-verso d’un justificatif d'identité et de
              nationalité en cours de validité : le passeport ou la carte
              nationale d'identité, ou le titre de séjour, le cas échéant.
              L’autorisation inscrite sur le titre de séjour de son titulaire
              doit lui permettre d’exercer « toutes professions salariées en
              France » ;
            </li>
            <li class="list-group-item">
              une
              <a>
                déclaration sur l’honneur de non-condamnation et de filiation
              </a>
              datée et signée en original, elle fera l'objet d'une vérification
              par le juge-commis au Registre du Commerce et des Sociétés ;
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h3 className="my-3">
            Pour les membres du conseil de surveillance et du directoire société
            anonyme nommée :
          </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              un extrait modèle K-bis délivré par le Registre du Commerce et des
              Sociétés en original datant de moins de trois mois, ou tout
              document officiel justifiant de l'existence légale de la personne
              morale non inscrite au Registre du Commerce et des Sociétés ;
            </li>
            <li class="list-group-item">
              Un exemplaire de la désignation du représentant permanent de la
              Société anonyme nommée et les mêmes pièces que celles énoncées
              précédemment pour les membres personnes physiques pour le
              représentant permanent ;{" "}
            </li>
            <li class="list-group-item">
              Un <a>pouvoir ;</a>
            </li>
            <li class="list-group-item">
              Une provision d’un montant de XXX euros comprenant l’étude, la
              présentation et le suivi du dossier, la rédaction et l’insertion
              de l’avis de constitution dans un journal d’annonces légales
              habilité, la rédaction des liasses et imprimés administratifs, la
              saisine du Centre de formalités des entreprises de la Chambre de
              commerce, les frais d’immatriculation et de dépôt d’actes au
              greffe du Tribunal de commerce.
            </li>
          </ul>
        </div>
        <div className="my-3 page-break">
          <h3 className="my-3 ">Vous faites votre formalité :</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              La copie du récépissé de dépôt du rapport du commissaire à la
              transformation ;
            </li>
            <li class="list-group-item">
              Une attestation de l’avis de modification dans un journal
              d’annonces légales{" "}
            </li>
            <li class="list-group-item">Une liasse M2 – 11682*03 ;</li>
            <li class="list-group-item">Une liasse M3 – 11683*02 ;</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="my-3">Besoin d’une assistance :</h4>
        <Container fluid>
          <Row>
            <Col md={6} className="text-start">
              <Link to="/landing/pages/SitePages/ContactPage">
                <Button>Contact</Button>
              </Link>
            </Col>
            {authToken && (
              <Col md={6} className="text-end">
                <Button onClick={handleDownloadPDF}>Télécharger le PDF</Button>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default SADCSenSAS;
