import React from "react";
import PageContainer from "../../layout/page-container/PageContainer";
import { Link } from "react-router-dom";
import {Button} from "reactstrap";

const Error404Classic = () => {
  return (
      <PageContainer>
        <div className="block nk-block-middle wide-xs mx-auto">
          <div className="block-content nk-error-ld text-center">
            <h1 className="nk-error-head">404</h1>
            <h3 className="nk-error-title">Oops! Pourquoi es-tu ici ?</h3>
            <p className="nk-error-text">
            Nous sommes vraiment désolés pour le désagrément. Il semble que vous essayiez d'accéder à une page qui a soit été supprimée, n'a jamais existé, ou pour laquelle vous n'avez pas l'autorisation d'accès.
            </p>
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Retour au page d'accueil
              </Button>
            </Link>
          </div>
        </div>
      </PageContainer>
  );
};
export default Error404Classic;
