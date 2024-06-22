import React from "react";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useRemoveEtablissementMutation } from "../../../../store";

const ReadEtablissement = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const location = useLocation();
  const { etablissement } = location.state ? location.state : "";

  console.log(etablissement);

  const [removeEtablissement, results] = useRemoveEtablissementMutation();

  const handleRemoveetablissement = async () => {
    await removeEtablissement(etablissement);
    setModal(!modal);
    window.location.replace("/admin/etablisements");
  };

  return (
    <div>
      <Box m="20px">
        <HeadContent
          title="Consulter un établissement"
          subtitle="Consulter les informations d'un établissement"
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
                to={`/admin/etablisements/update`}
                state={{ etablissement: etablissement }}
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
                <span>
                  {" "}
                  {etablissement
                    ? etablissement.societe_siren
                    : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Société greffe :</span>
                <span>
                  {" "}
                  {etablissement
                    ? etablissement.societe_greffe
                    : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Modéle :</span>
                <span>
                  {" "}
                  {etablissement ? etablissement.modele : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Activité :</span>
                <span>
                  {" "}
                  {etablissement ? etablissement.activite : etablissement}{" "}
                </span>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="ms-5 my-1">
                <span className="text-black">Date du début :</span>
                <span>
                  {" "}
                  {etablissement
                    ? etablissement.date_debut
                    : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Adresse :</span>
                <span>
                  {" "}
                  {etablissement ? etablissement.adresse : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Nom commercial :</span>
                <span>
                  {" "}
                  {etablissement
                    ? etablissement.nom_commercial
                    : etablissement}{" "}
                </span>
              </div>
              <div className="ms-5 my-1">
                <span className="text-black">Enseigne :</span>
                <span>
                  {" "}
                  {etablissement ? etablissement.enseigne : etablissement}{" "}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            Etes vous sur de vouloir supprimer ce etablissement ?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleRemoveetablissement}>
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

export default ReadEtablissement;
