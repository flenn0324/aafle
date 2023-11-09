import React from "react";
import { Box, Button } from "@mui/material";
import HeadContent from "../HeadContent";
import "../dashboard.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function Prescripteurs() {
  const Data = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
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
          to={`/admin`}
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
        <Container fluid>
          <Row className="text-end">
            <Col>
              <Button
                size="small"
                variant="outlined"
                color="success"
                component={Link}
                to={`/admin`}
              >
                Ajouter +
              </Button>
            </Col>
          </Row>
        </Container>
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid
            checkboxSelection
            rows={Data}
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
