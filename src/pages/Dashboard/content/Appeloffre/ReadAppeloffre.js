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
import { useRemoveAppeloffreMutation } from "../../../../store";

const ReadAppeloffre = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const location = useLocation();
  const { appeloffre } = location.state ? location.state : "";

  const [removeAppeloffre, results] = useRemoveAppeloffreMutation();

  const handleRemoveAppeloffre = async () => {
    await removeAppeloffre(appeloffre);
    setModal(!modal);
    window.location.replace("/admin/appeloffres");
  };

  return (
    <div>
      <Box m="20px">
        <HeadContent
          title="Consulter un appel d'offre"
          subtitle="Consulter les informations d'un appel d'offre"
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
                to={`/admin/appeloffres/update`}
                state={{ appeloffre: appeloffre }}
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
                <span className="text-black">Numéro de prescripteur :</span>
                <span> {appeloffre ? appeloffre.numero_prescripteur : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Nom prescripteur:</span>
                <span> {appeloffre ? appeloffre.prescripteur_nom : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Prénom prescripteur :</span>
                <span> {appeloffre ? appeloffre.prescripteur_prenom : appeloffre} </span>
              </div>
            </Col>
            <Col lg={6} md={6}>
            <div className="ms-5 my-1">
                <span className="text-black">Type :</span>
                <span> {appeloffre ? appeloffre.type : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Nombre de sociétés :</span>
                <span> {appeloffre ? appeloffre.nombre_societes : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Localisation :</span>
                <span> {appeloffre ? appeloffre.localisation : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Préstataire actuel :</span>
                <span> {appeloffre ? appeloffre.prestataire_actuel : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Contacter par :</span>
                <span> {appeloffre ? appeloffre.contacter_par : appeloffre} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Cahier des charges :</span>
                <span> {appeloffre ? appeloffre.cahier_charge : appeloffre} </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Etes vous sur de vouloir supprimer cette société ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleRemoveAppeloffre}>
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

export default ReadAppeloffre;
