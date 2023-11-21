import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useFetchDirigeantsQuery } from "../../../../store";
import Skeleton from "../Skeleton/Skeleton";

const Dirigeants = () => {
  const { data, error, isLoading } = useFetchDirigeantsQuery();
  console.log("liste :" + data);
  if (isLoading) {
    return (
      <div>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </div>
    );
  } else if (error) {
    return (
      <Container>
        <h1 className="mt-5 text-center">ERREUR 500</h1>
        <h3 className="m-5 text-center">
          erreur de chargement du liste des dirigeants
        </h3>
      </Container>
    );
  }

  const dataTransformed = data.data.map((item) => {
    const { id, attributes,relationships } = item;
    return {
      id: id,
      nom: attributes.nom,
      prenom: attributes.prenom,
      societe_siren : relationships.societe_siren,
      societe_greffe : relationships.societe_greffe,
      date_naissance: attributes.date_naissance,
      adresse: attributes.adresse,
      nationalite: attributes.nationalite,
      Département_naissance: attributes.Département_naissance,
      ville_naissance: attributes.ville_naissance,
      pays_naissance: attributes.pays_naissance,
      qualite: attributes.qualite,
      ancienne_qualite: attributes.ancienne_qualite,
      date_modification: attributes.date_modification,
      departement_naissance: attributes.departement_naissance,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nom",
      headerName: "Nom",
      flex: 1,
    },
    {
      field: "prenom",
      headerName: "Prénom",
      flex: 1,
    },
    {
      field: "societe_siren",
      headerName: "Siren Société",
      flex: 1,
    },
    {
      field: "qualite",
      headerName: "Qualité",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Button
          size="small"
          variant="outlined"
          color="primary"
          component={Link}
          to={`/admin/dirigeants/read`}
          state={{ dirigeant : row }}
        >
          Consulter
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Box m="20px">
        <HeadContent title="Dirigeants" subtitle="Listes des dirigeants" />
        <Container fluid>
          <Row className="text-end">
            <Col>
              <Button
                size="small"
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin/dirigeants/add`}
              >
                Ajouter +
              </Button>
            </Col>
          </Row>
        </Container>
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid
            checkboxSelection
            rows={dataTransformed}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            localeText={{ noRowsLabel: "Pas de dirigeants" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Dirigeants;
