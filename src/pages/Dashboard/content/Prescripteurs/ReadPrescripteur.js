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
import { useRemovePrescripteurMutation } from "../../../../store";

const ReadPrescripteur = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const location = useLocation();
  const { prescripteur } = location.state ? location.state : "";

  const [removePrescripteur, results] = useRemovePrescripteurMutation();

  const handleRemovePrescripteur = async () => {
    await removePrescripteur(prescripteur);
    setModal(!modal);
    window.location.replace("/admin/users");
  };
  return (
    <div>
    <Box m="20px">
    <HeadContent title="Consulter un prescripteur" subtitle="Consulter les informations d'un prescripteur"/>
      <Container fluid>
        <Row className="text-end">
        <Col>
              <Button
                size="small"
                className={"m-2"}
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin/prescripteurs/update`}
                state={{ prescripteur: prescripteur }}
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
                <span className="text-black">type_utilisateur  :</span>
                <span> {prescripteur ? prescripteur.type_utilisateur : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">civilite :</span>
                <span> {prescripteur ? prescripteur.civilite : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">denomenation sociale :</span>
                <span> {prescripteur ? prescripteur.denomenation : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">nom :</span>
                <span> {prescripteur ? prescripteur.nom : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Prénom 1 :</span>
                <span> {prescripteur ? prescripteur.prenom1 : prescripteur} </span>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ms-5 my-1">
                <span className="text-black">prenom2 :</span>
                <span> {prescripteur ? prescripteur.prenom2 : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">prenom3 :</span>
                <span> {prescripteur ? prescripteur.prenom3 : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">phone  :</span>
                <span> {prescripteur ? prescripteur.phone : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">fix :</span>
                <span> {prescripteur ? prescripteur.fix : prescripteur} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">fonction :</span>
                <span> {prescripteur ? prescripteur.fonction : prescripteur} </span>
              </div>
            </Col>
          </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Etes vous sur de vouloir supprimer cette prescripteur ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleRemovePrescripteur}>
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

export default ReadPrescripteur;