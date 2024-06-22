import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useFetchEtablissementsQuery } from "../../../../store";
import Skeleton from "../Skeleton/Skeleton";

function Etablissements() {
  const { data, error, isLoading } = useFetchEtablissementsQuery();
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
          erreur de chargement du liste des établissements
        </h3>
      </Container>
    );
  }

  const dataTransformed = data.data.map((item) => {
    const { id, attributes,relationships } = item;
    return {
      id: id,
      modele: attributes.modele,
      activite: attributes.activite,
      societe_siren : relationships.societe_siren,
      societe_greffe : relationships.societe_greffe,
      date_debut: attributes.date_debut,
      adresse: attributes.adresse,
      nom_commercial: attributes.nom_commercial,
      enseigne: attributes.enseigne,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nom_commercial",
      headerName: "Nom commercial",
      flex: 1,
    },
    {
      field: "modele",
      headerName: "Modéle",
      flex: 1,
    },
    {
      field: "societe_siren",
      headerName: "Siren Société",
      flex: 1,
    },
    {
      field: "activite",
      headerName: "Activité",
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
          to={`/admin/etablisements/read`}
          state={{ etablissement : row }}
        >
          Consulter
        </Button>
      ),
    },
  ];


  return (
    <div>
      <Box m="20px">
        <HeadContent title="Etablissements" subtitle="Listes des établissements" />
        <Container fluid>
          <Row className="text-end">
            <Col>
              <Button
                size="small"
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin/etablisements/add`}
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
            localeText={{ noRowsLabel: "Pas d'établissements" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Etablissements;
