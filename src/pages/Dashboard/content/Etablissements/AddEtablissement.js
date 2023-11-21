import { Box, Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadContent from "../../HeadContent";
import { useAddEtablissementMutation } from "../../../../store";
import { useFetchSocietesQuery } from "../../../../store";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const AddEtablissement = () => {
  const [AddEtablissement, results] = useAddEtablissementMutation();
  const { data, error, isLoading } = useFetchSocietesQuery();

  console.log(data);
  const dataTransformed =
    data?.data?.map((item) => {
      const { id, attributes } = item;
      return {
        id: id,
        societe_siren: attributes.siren,
      };
    }) || [];

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const alert = () => {
    return (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    );
  };

  const handleFormSubmit = async (values) => {
    console.log(values);
    await AddEtablissement(values);
    alert();
    window.location.replace('/admin/etablisements'); 
  };

  return (
    <Box m="20px">
      <HeadContent
        title="Ajouter un établissement"
        subtitle="Ajouter un nouveau établissement"
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
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel htmlFor="societe_id">Société</InputLabel>
                <Field
                  as={Select}
                  id="societe_id"
                  name="societe_id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.societe_id}
                  error={touched.societe_id && !!errors.societe_id}
                >
                  <MenuItem value="" disabled>
                    Select Société Siren
                  </MenuItem>
                  {dataTransformed.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.societe_siren}
                    </MenuItem>
                  ))}
                </Field>
                <ErrorMessage name="societe" component="div" />
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Modéle"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.modele}
                name="modele"
                error={!!touched.modele && !!errors.modele}
                helperText={touched.modele && errors.modele}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Activité"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.activite}
                name="activite"
                error={!!touched.activite && !!errors.activite}
                helperText={touched.activite && errors.activite}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date de début"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date_debut}
                name="date_debut"
                error={!!touched.date_debut && !!errors.date_debut}
                helperText={touched.date_debut && errors.date_debut}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nom commercial"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nom_commercial}
                name="nom_commercial"
                error={!!touched.nom_commercial && !!errors.nom_commercial}
                helperText={touched.nom_commercial && errors.nom_commercial}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Enseigne"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.enseigne}
                name="enseigne"
                error={!!touched.enseigne && !!errors.enseigne}
                helperText={touched.enseigne && errors.enseigne}
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
  modele: yup.string().required("required"),
  activite: yup.string().required("required"),
  date_debut: yup.string().required("required"),
  nom_commercial: yup.string().required("required"),
  enseigne: yup.string().required("required"),
  adresse: yup.string().required("required"),
});
const initialValues = {
  modele: "",
  activite: "",
  societe_id: "",
  date_debut: "",
  nom_commercial: "",
  enseigne: "",
  adresse: "",
};


export default AddEtablissement;