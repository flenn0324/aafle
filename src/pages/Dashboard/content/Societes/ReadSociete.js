import React from "react";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useRemoveSocieteMutation } from "../../../../store";

const ReadSociete = () => {
  const location = useLocation();
  const { societe } = location.state ? location.state : "";

  const [removeSociete, results] = useRemoveSocieteMutation();

  const handleRemoveSociete = () => {
    removeSociete(societe);
  };

  return (
    <div>
      <Box m="20px">
        <HeadContent
          title="Consulter une société"
          subtitle="Consulter les informations d'une société"
        />
        <Container fluid>
          <Row className="text-end">
            <Col>
              <Button
                size="small"
                className={"m-2"}
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin/societes/update`}
                state={{ societe: societe }}
              >
                Modifier
              </Button>
              <Button
                size="small"
                variant="outlined"
                style={{ color: "red" }}
                component={Link}
                to={`/admin/societes`}
                onClick={handleRemoveSociete}
              >
                Supprimer
              </Button>
            </Col>
          </Row>
          <Row>
            <p className="ms-5">id : {societe ? societe.id : societe}</p>
            <p className="ms-5">liste : {societe ? societe.siren : societe}</p>
            <p className="ms-5">liste : {societe ? societe.greffe : societe}</p>
            <p className="ms-5">
              liste : {societe ? societe.forme_sociale : societe}
            </p>
            <p className="ms-5">
              liste : {societe ? societe.denomination : societe}
            </p>
            <p className="ms-5">
              liste : {societe ? societe.objet_sociale : societe}
            </p>
            <p className="ms-5">liste : {societe ? societe.date : societe}</p>
            <p className="ms-5">liste : {societe ? societe.duree : societe}</p>
            <p className="ms-5">
              liste : {societe ? societe.capital_social : societe}
            </p>
            <p className="ms-5">
              liste : {societe ? societe.exercice_social : societe}
            </p>
            <p className="ms-5">liste : {societe ? societe.sigle : societe}</p>
            <p className="ms-5">
              liste : {societe ? societe.adresse : societe}
            </p>
          </Row>
        </Container>
      </Box>
    </div>
  );
};

export default ReadSociete;
