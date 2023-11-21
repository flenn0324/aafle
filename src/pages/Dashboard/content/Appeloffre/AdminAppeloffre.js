import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useFetchAppeloffresQuery } from "../../../../store";
import Skeleton from "../Skeleton/Skeleton";

function AdminAppeloffre() {
  const { data, error, isLoading } = useFetchAppeloffresQuery();
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
          erreur de chargement du liste des appels d'offres
        </h3>
      </Container>
    );
  }

  const dataTransformed = data.data.map((item) => {
    const { id, attributes,relationships } = item;
    return {
      id: id,
      prescripteur_id: attributes.prescripteur_id,
      type: attributes.type,
      nombre_societes : attributes.nombre_societes,
      localisation : attributes.localisation,
      prestataire_actuel: attributes.prestataire_actuel,
      contacter_par: attributes.contacter_par,
      cahier_charge: attributes.cahier_charge,
      commentaire: attributes.commentaire,
      numero_prescripteur : relationships.id,
      prescripteur_nom : relationships.prescripteur_nom,
      prescripteur_prenom : relationships.prescripteur_prenom,
    };
  });

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "nombre_societes",
      headerName: "Nombre de société",
      flex: 1,
    },
    {
      field: "localisation",
      headerName: "Localisation",
      flex: 1,
    },
    {
      field: "prestataire_actuel",
      headerName: "Prestataire actuel",
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
          to={`/admin/appeloffres/read`}
          state={{ appeloffre : row }}
        >
          Consulter
        </Button>
      ),
    },
  ];


  return (
    <div>
      <Box m="20px">
        <HeadContent title="Appel d'offres" subtitle="Listes des appel d'offres" />
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid
            checkboxSelection
            rows={dataTransformed}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            localeText={{ noRowsLabel: "Pas d'appel d'offre" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default AdminAppeloffre;
