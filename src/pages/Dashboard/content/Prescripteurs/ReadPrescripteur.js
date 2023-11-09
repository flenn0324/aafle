import React from "react";
import HeadContent from '../../HeadContent';
import "../../dashboard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Box, Button } from "@mui/material";

const ReadPrescripteur = () => {
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
            >
              Modifier
            </Button>
            <Button
              size="small"
              variant="outlined"
              style={{ color: 'red' }} 
              component={Link}
              to={`/admin/prescripteurs`}
            >
              Supprimer
            </Button>
          </Col>
        </Row>
      </Container>
    </Box>
  </div>
  );
};

export default ReadPrescripteur;