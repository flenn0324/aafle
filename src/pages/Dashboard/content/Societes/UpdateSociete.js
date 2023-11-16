import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadContent from "../../HeadContent";
import { useLocation } from "react-router-dom";
import {useUpdateSocieteMutation} from "../../../../store";

const UpdateSociete = (props) => {
  //const[addSociete,results] = useAddSocieteMutation();
  const location = useLocation();
  const { societe } = location.state ? location.state : "";

  const initialValues = {
    siren: societe.siren,
    greffe: societe.greffe,
    forme_sociale: societe.forme_sociale,
    denomination: societe.denomination,
    objet_sociale:societe.objet_sociale ,
    date: societe.date,
    duree: societe.duree,
    capital_social: societe.capital_social,
    exercice_social: societe.exercice_social,
    sigle: societe.sigle,
    adresse: societe.adresse,
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [UpdateSociete, results] = useUpdateSocieteMutation();
  

  const handleFormSubmit = (values) => {
    console.log(values);
    UpdateSociete(values);
  };

  return (
    <Box m="20px">
      <HeadContent
          title="Modifier une société"
          subtitle="Modifier les informations d'une société"
        />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Siren"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.siren}
                name="siren"
                error={!!touched.siren && !!errors.siren}
                helperText={touched.siren && errors.siren}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Greffe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.greffe}
                name="greffe"
                error={!!touched.greffe && !!errors.greffe}
                helperText={touched.greffe && errors.greffe}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Forme sociale"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.forme_sociale}
                name="forme_sociale"
                error={!!touched.forme_sociale && !!errors.forme_sociale}
                helperText={touched.forme_sociale && errors.forme_sociale}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dénomination Sociale"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.denomination}
                name="denomination"
                error={!!touched.denomination && !!errors.denomination}
                helperText={touched.denomination && errors.denomination}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Objet social"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.objet_sociale}
                name="objet_sociale"
                error={!!touched.objet_sociale && !!errors.objet_sociale}
                helperText={touched.objet_sociale && errors.objet_sociale}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Durée"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.duree}
                name="duree"
                error={!!touched.duree && !!errors.duree}
                helperText={touched.duree && errors.duree}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Capital social"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.capital_social}
                name="capital_social"
                error={!!touched.capital_social && !!errors.capital_social}
                helperText={touched.capital_social && errors.capital_social}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Exercice social"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.exercice_social}
                name="exercice_social"
                error={!!touched.exercice_social && !!errors.exercice_social}
                helperText={touched.exercice_social && errors.exercice_social}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Sigle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sigle}
                name="sigle"
                error={!!touched.sigle && !!errors.sigle}
                helperText={touched.sigle && errors.sigle}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adresse"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adresse}
                name="adresse"
                error={!!touched.adresse && !!errors.adresse}
                helperText={touched.adresse && errors.adresse}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            {values.id = societe.id}
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Valider
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

/*const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;*/

const checkoutSchema = yup.object().shape({
  siren: yup.string().required("required"),
  greffe: yup.string().required("required"),
  forme_sociale: yup.string().required("required"),
  denomination: yup.string().required("required"),
  objet_sociale: yup.string().required("required"),
  date: yup.date().required("required"),
  duree: yup.string().required("required"),
  capital_social: yup.string().required("required"),
  exercice_social: yup.string().required("required"),
  sigle: yup.string().required("required"),
  adresse: yup.string().required("required"),
});


export default UpdateSociete;