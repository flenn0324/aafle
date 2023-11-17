import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useFetchSocietesQuery } from "../../../../store";
import Skeleton from "../Skeleton/Skeleton";

function Societes() {
  const { data, error, isLoading } = useFetchSocietesQuery();

  console.log(data);

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
          erreur de chargement du liste des sociétés
        </h3>
      </Container>
    );
  }

  const dataTransformed = data.data.map((item) => {
    const { id, attributes } = item;
    return {
      id: id,
      siren: attributes.siren,
      greffe: attributes.greffe,
      forme_sociale: attributes.forme_sociale,
      denomination: attributes.denomination,
      objet_sociale: attributes.objet_sociale,
      date: attributes.date,
      duree: attributes.duree,
      capital_social: attributes.capital_social,
      exercice_social: attributes.exercice_social,
      sigle: attributes.sigle,
      adresse: attributes.adresse,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "siren",
      headerName: "Siren",
      flex: 1,
    },
    {
      field: "greffe",
      headerName: "Greffe",
      flex: 1,
    },
    {
      field: "forme_sociale",
      headerName: "Forme sociale",
      flex: 1,
    },
    {
      field: "denomination",
      headerName: "Deno sociale",
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
          to={`/admin/societes/read`}
          state={{ societe: row }}
        >
          Consulter
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Box m="20px">
        <HeadContent title="Sociétés" subtitle="Listes des sociétés" />
        <Container fluid>
          <Row className="text-end">
            <Col>
              <Button
                size="small"
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin/societes/add`}
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
            localeText={{ noRowsLabel: "Pas de sociétés" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Societes;
