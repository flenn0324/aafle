import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../../HeadContent";
import "../../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {useFetchPrescripteursQuery} from "../../../../store";
import Skeleton from '../Skeleton/Skeleton';


function Prescripteurs() {
  const {data,error,isLoading} = useFetchPrescripteursQuery();
  console.log(data);
  if (isLoading){
    return <Skeleton></Skeleton>
  }else if (error){
    return (<div>erreur loading prescripteurs</div>)
  }
 

  const dataTransformed = data.data.map((item) => {
    const { id, attributes } = item;
    return {
      id: id,
      civilite: attributes.civilite,
      denomenation: attributes.denomination_sociale,
      nom: attributes.nom,
      phone: attributes.telephone,
      fonction: attributes.fonction,
      type: attributes.type_utilisateur,
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
      field: "type",
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
          state={{ payment: row }}
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
            localeText={{ noRowsLabel: "Pas de prescripteurs inscrits" }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default Prescripteurs;
