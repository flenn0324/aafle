import React from "react";
import { Container } from "reactstrap";
import { Helmet } from "react-helmet";

const Document1 = (props) => {
  return (
    <Container className="justify-content-center bg-white p-5 border my-5">
      <Helmet>
        <title>Test title</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <p>
        Accueil / immatriculation / personne-morale /
        societe-a-responsabilite-limitee-sarl-creation-fonds-de-commerce
      </p>
      <h1 className="text-center mb-5">Immatriculation SARL - Création</h1>
      <div className="my-3">
        <ul>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
        </ul>
      </div>
      <div className="my-3">
        <h3 className="my-1">Pour le ou les gérants :</h3>
        <ul>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
        </ul>
      </div>
      <div className="my-3">
        <h3 className="my-1">Vous faites votre formalité :</h3>
        <ul>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
          <li>exemplaire 1</li>
        </ul>
      </div>
    </Container>
  );
};

export default Document1;
