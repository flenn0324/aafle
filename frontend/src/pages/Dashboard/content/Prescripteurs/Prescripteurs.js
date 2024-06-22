import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useFetchPrescripteursQuery } from "../../../../store";
import Skeleton from "../Skeleton/Skeleton";


function Prescripteurs() {
  const {data,error,isLoading} = useFetchPrescripteursQuery();
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
          erreur de chargement du liste des prescripteurs
        </h3>
      </Container>
    );
  }
 
  const dataTransformed = data.data.map((item) => {
    const { id, attributes } = item;
    return {
      id: id,
      type_utilisateur: attributes.type_utilisateur,
      civilite: attributes.civilite,
      denomenation: attributes.denomination_sociale,
      nom: attributes.nom,
      prenom1: attributes.prenom1,
      prenom2: attributes.prenom2,
      prenom3: attributes.prenom3,
      phone: attributes.telephone,
      fix: attributes.fix,
      fonction: attributes.fonction,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "civilite",
      headerName: "Civilité",
      flex: 1,
    },
    {
      field: "nom",
      headerName: "Nom",
      flex: 1,
    },
    {
      field: "denomenation",
      headerName: "Dénom Sociale",
      flex: 1,
    },
    {
      field: "fonction",
      headerName: "Fonction",
      flex: 1,
    },
    {
      field: "type_utilisateur",
      headerName: "Type utilisateur",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Téléphone",
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
          to={`/admin/prescripteurs/read`}
          state={{ prescripteur: row }}
        >
          Consulter
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Box m="20px">
        <HeadContent
          title="Prescripteurs"
          subtitle="Listes des prescripteurs"
        />
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid
            checkboxSelection
            rows={dataTransformed}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            localeText={{ noRowsLabel: "Pas de prescripteurs" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Prescripteurs;
