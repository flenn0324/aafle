import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";

const Creation = (props) => {
  const authToken = localStorage.getItem("accessToken");

  const handleDownloadPDF = () => {
    const content = document.getElementById("pdf-content");
    const pdfOptions = {
      margin: 10,
      filename: "Immatriculation SELARL - Creation.pdf",
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
        <title>Immatriculation SELARL - Création</title>
        <meta
          name="description"
          content="Liste des documents nécessaires et modèles utiles à la constitution de son dossier d’immatriculation d’une société d’exercice libéral à responsabilité limitée lors de la création d’un fonds de commerce pour créer sa SELARL et obtenir rapidement un extrait kbis auprès du greffe du Tribunal de commerce
          Téléchargez la liste des documents pour créer une SELARL lors de la création d’un fonds de commerce, rédigez votre annonce légale et faites votre formalité d’immatriculation en ligne"
        />
        <meta
          name="keywords"
          content="annonces, formalités, creation, selarl, immatriculation, greffe, kbis, express"
        />
        <link
          rel="canonical"
          href="https://www.formalites-legales.fr/Immatriculation/personne-morale/societe-d-exercice-liberal-a-responsabilite-limitee-selarl-creation-fonds-de-commerce"
        />
      </Helmet>
      <p className="mb-5">
        Accueil
        /Immatriculation/personne-morale/societe-d-exercice-liberal-a-responsabilite-limitee-selarl-creation-fonds-de-commerce
      </p>
      <div id="pdf-content">
        <h2 className="text-center mb-3">Immatriculation SELARL - Création</h2>
        <div className="my-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Un exemplaire des statuts daté et signé en original par tous les
              associés ou par un mandataire justifiant d’un pouvoir spécial
              (pour un acte sous seing privé) ou une expédition (pour un acte
              authentique), les pouvoirs doivent-être déposés en un exemplaire
              original ;
            </li>
            <li class="list-group-item">
              Un exemplaire certifié conforme par le gérant de l'acte le
              désignant, si le gérant n'est pas nommé dans les statuts ;
            </li>
            <li class="list-group-item">
              Un exemplaire original du certificat du dépositaire des fonds
              établit par l’organisme où le capital a été déposé ;
            </li>
            <li class="list-group-item">
              Le certificat du dépositaire des fonds établit par l’organisme où
              le capital a été déposé, si le nom et l’adresse de cet
              établissement n’est pas mentionné dans les statuts ;
            </li>
            <li class="list-group-item">
              Une copie justificative de l’occupation régulière des locaux du
              siège social (par tous moyens : bail, contrat de domiciliation,
              quittance EDF ou de téléphone ...) et une attestation de mise à
              disposition dans le cas où le siège social est fixé à l’adresse
              d’un des gérants ;
            </li>
            <li>
              La copie du justificatif de l’autorisation d’exercice de
              l’activité délivrée par l’autorité compétente aux noms de la
              société et du ou des gérants ;
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h3 className="my-3">
          Pour le ou les gérants :
          </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Une copie recto-verso d’un justificatif d'identité et de
              nationalité en cours de validité : le passeport, ou la carte
              nationale d'identité, ou le titre de séjour, le cas échéant.
              L’autorisation inscrite sur le titre de séjour de son titulaire
              doit lui permettre d’exercer « toutes professions salariées en
              France ».
            </li>
            <li class="list-group-item">
              une
              <a>
                déclaration sur l’honneur de non-condamnation et de filiation
              </a>
              datée et signée en original, elle fera l'objet d'une vérification
              par le juge-commis au Registre du Commerce et des Sociétés ;
            </li>
            <li class="list-group-item">
              La copie de l’attestation annuelle délivrée par l’organisme de
              sécurité sociale où le ou les gérants sont affiliés ;
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
            <li class="list-group-item">Une liasse M0 – 13959*03 ;</li>
            <li class="list-group-item">Un Formulaire TNS, le cas échéant ;</li>
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

export default Creation;
