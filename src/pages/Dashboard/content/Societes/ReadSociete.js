import React from "react";
import HeadContent from '../../HeadContent';
import "../../dashboard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Box, Button } from "@mui/material";

const ReadSociete = () => {
  return (
    <div>
    <Box m="20px">
    <HeadContent title="Consulter une société" subtitle="Consulter les informations d'une société"/>
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
            >
              Modifier
            </Button>
            <Button
              size="small"
              variant="outlined"
              style={{ color: 'red' }} 
              component={Link}
              to={`/admin/societes`}
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

export default ReadSociete;