import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadContent from "../../HeadContent";
import { useLocation } from "react-router-dom";
import { useUpdatePrescripteurMutation } from "../../../../store";

const UpdatePrescripteur = () => {
  const location = useLocation();
  const { prescripteur } = location.state ? location.state : "";

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const initialValues = {
    type_utilisateur: prescripteur.type_utilisateur,
    civilite: prescripteur.civilite,
    denomination_sociale: prescripteur.denomination_sociale,
    nom: prescripteur.nom,
    prenom1: prescripteur.prenom1,
    prenom2: prescripteur.prenom2,
    prenom3: prescripteur.prenom3,
    phone: prescripteur.telephone,
    fix: prescripteur.fix,
    fonction: prescripteur.fonction,
  };

  const [UpdatePrescripteur, results] = useUpdatePrescripteurMutation();

  const handleFormSubmit = async (values) => {
    console.log(values);
    await UpdatePrescripteur(values);
    window.location.replace('/admin/users'); 
  };

  return (
    <Box m="20px">
      <HeadContent
        title="Modifier Prescripteur"
        subtitle="Modifier les informations du prescripteur"
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
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type_utilisateur}
                name="type_utilisateur"
                error={!!touched.type_utilisateur && !!errors.type_utilisateur}
                helperText={touched.type_utilisateur && errors.type_utilisateur}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.civilite}
                name="civilite"
                error={!!touched.civilite && !!errors.civilite}
                helperText={touched.civilite && errors.civilite}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="denomenation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.denomination_sociale}
                name="denomination_sociale"
                error={!!touched.denomination_sociale && !!errors.denomination_sociale}
                helperText={touched.denomination_sociale && errors.denomination_sociale}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom}
                name="nom"
                error={!!touched.nom && !!errors.nom}
                helperText={touched.nom && errors.nom}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Prénom 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom1}
                name="prenom1"
                error={!!touched.prenom1 && !!errors.prenom1}
                helperText={touched.prenom1 && errors.prenom1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="prenom2 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom2}
                name="prenom2"
                error={!!touched.prenom2 && !!errors.prenom2}
                helperText={touched.prenom2 && errors.prenom2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="prenom 3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom3}
                name="prenom3"
                error={!!touched.prenom3 && !!errors.prenom3}
                helperText={touched.prenom3 && errors.prenom3}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="phone "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="fix 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fix}
                name="fix"
                error={!!touched.fix && !!errors.fix}
                helperText={touched.fix && errors.fix}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="fonction "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fonction}
                name="fonction"
                error={!!touched.fonction && !!errors.fonction}
                helperText={touched.fonction && errors.fonction}
                sx={{ gridColumn: "span 2" }}
              />
              {values.id = prescripteur.id}
            </Box>
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


const checkoutSchema = yup.object().shape({
  type_utilisateur: yup.string().required("required"),
  civilite: yup.string().required("required"),
  prenom1: yup.string().required("required"),
  prenom2: yup.string().required("required"),
});

export default UpdatePrescripteur;
