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
import { useRemoveDirigeantMutation } from "../../../../store";

const ReadDirigeant = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const location = useLocation();
  const { dirigeant } = location.state ? location.state : "";

  console.log(dirigeant)

  const [removeDirigeant, results] = useRemoveDirigeantMutation();

  const handleRemoveDirigeant = async () => {
    await removeDirigeant(dirigeant);
    setModal(!modal);
    window.location.replace("/admin/dirigeants");
  };

  return (
    <div>
      <Box m="20px">
        <HeadContent
          title="Consulter un dirigeant"
          subtitle="Consulter les informations d'un dirigeant"
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
                to={`/admin/dirigeants/update`}
                state={{ dirigeant: dirigeant }}
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
                <span className="text-black">Société Siren :</span>
                <span> {dirigeant ? dirigeant.societe_siren : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Nom :</span>
                <span> {dirigeant ? dirigeant.nom : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Prénom :</span>
                <span> {dirigeant ? dirigeant.prenom : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Date de naissance :</span>
                <span> {dirigeant ? dirigeant.date_naissance : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Adresse :</span>
                <span> {dirigeant ? dirigeant.adresse : dirigeant} </span>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ms-5 my-1">
                <span className="text-black">nationalite :</span>
                <span> {dirigeant ? dirigeant.nationalite : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Ville de naissance :</span>
                <span> {dirigeant ? dirigeant.ville_naissance : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Pays de naissance:</span>
                <span> {dirigeant ? dirigeant.pays_naissance : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Qualité :</span>
                <span> {dirigeant ? dirigeant.qualite : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Ancienne qualité :</span>
                <span> {dirigeant ? dirigeant.ancienne_qualite : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Date de modification :</span>
                <span> {dirigeant ? dirigeant.date_modification : dirigeant} </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Département de naissance :</span>
                <span> {dirigeant ? dirigeant.departement_naissance : dirigeant} </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Etes vous sur de vouloir supprimer ce dirigeant ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleRemoveDirigeant}>
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

export default ReadDirigeant;
