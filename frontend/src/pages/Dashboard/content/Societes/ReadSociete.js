import React from "react";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useRemoveSocieteMutation } from "../../../../store";

const ReadSociete = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const location = useLocation();
  const { societe } = location.state ? location.state : "";

  const [removeSociete, results] = useRemoveSocieteMutation();

  const handleRemoveSociete = async () => {
    await removeSociete(societe);
    setModal(!modal);
    window.location.replace("/admin/societes");
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
                onClick={toggle}
              >
                Supprimer
              </Button>
            </Col>
          </Row>
          <Row className="border py-5">
            <Col lg={6} md={6}>
              <div className="ms-5 my-1">
                <span className="text-black">Numéro Siren :</span>
                <span> {societe ? societe.siren : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Greffe :</span>
                <span> {societe ? societe.greffe : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Forme sociale :</span>
                <span> {societe ? societe.forme_sociale : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Dénomination :</span>
                <span> {societe ? societe.denomination : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Objet social :</span>
                <span> {societe ? societe.objet_sociale : societe} </span>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ms-5 my-1">
                <span className="text-black">Date :</span>
                <span> {societe ? societe.date : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Durée :</span>
                <span> {societe ? societe.duree : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Capital social :</span>
                <span> {societe ? societe.capital_social : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Exercice social :</span>
                <span> {societe ? societe.exercice_social : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Sigle :</span>
                <span> {societe ? societe.sigle : societe} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Adresse :</span>
                <span> {societe ? societe.adresse : societe} </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Etes vous sur de vouloir supprimer cette société ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleRemoveSociete}>
              Oui
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </Box>
    </div>
  );
};

export default ReadSociete;
