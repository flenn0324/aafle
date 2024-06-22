import React, { useState } from 'react';
import HeadContent from '../../HeadContent';
import "../../dashboard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Box, Button } from "@mui/material";

const ClientReadSociete = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const deleteCompany = () => {
    // Function to delete the company (To be implemented)
    toggle(); // Close the modal after deletion
  };

  return (
    <div>
    <Box m="20px">
    <HeadContent title="Consulter ma société" subtitle="Consulter les informations de ma société"/>
      <Container fluid>
        <Row className="text-end">
          <Col>
            <Button
              size="small"
              className={"m-2"}
              variant="outlined"
              color="success"
              component={Link}
              to={`/user/societes/update`}
            >
              Modifier
            </Button>
            <Button
              size="small"
              variant="outlined"
              style={{ color: 'red' }} 
              onClick={toggle}
              //component={Link}
              //to={`/admin/societes`}
            >
              Supprimer
            </Button>
          </Col>
        </Row>
      </Container>
    </Box>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Supprimer une société</ModalHeader>
        <ModalBody>
        Êtes-vous certain de vouloir supprimer cette société ?
        </ModalBody>
        <ModalFooter>
          <Button style={{ color: 'red' }}  onClick={deleteCompany}>
            Supprimer
          </Button>{' '}
          <Button style={{ color: 'grey' }}  onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
  </div>
  );
};

export default ClientReadSociete;