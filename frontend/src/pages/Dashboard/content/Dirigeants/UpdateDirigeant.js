import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadContent from "../../HeadContent";
import { useLocation } from "react-router-dom";
import { useUpdateDirigeantMutation } from "../../../../store";
import { useFetchSocietesQuery } from "../../../../store";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { Field, ErrorMessage } from "formik";

const UpdateDirigeant = (props) => {
  //const[addSociete,results] = useAddSocieteMutation();
  const location = useLocation();
  const { dirigeant } = location.state ? location.state : "";

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

  const initialValues = {
    nom: dirigeant.nom,
    prenom: dirigeant.prenom,
    societe_id: "",
    date_naissance: dirigeant.date_naissance,
    nationalite: dirigeant.nationalite,
    date_modification: dirigeant.date_modification,
    ville_naissance: dirigeant.ville_naissance,
    pays_naissance: dirigeant.pays_naissance,
    qualite: dirigeant.qualite,
    ancienne_qualite: dirigeant.ancienne_qualite,
    adresse: dirigeant.adresse,
    departement_naissance: dirigeant.departement_naissance,
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [UpdateDirigeant, results] = useUpdateDirigeantMutation();

  const handleFormSubmit = async (values) => {
    console.log(values);
    await UpdateDirigeant(values);
    window.location.replace("/admin/dirigeants");
  };

  return (
    <Box m="20px">
      <HeadContent
        title="Modifier un dirigeant"
        subtitle="Modifier les informations d'un dirigeant"
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
                <InputLabel htmlFor="societe_id">Societe</InputLabel>
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
                    Select Societe Siren
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
                label="Prénom"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom}
                name="prenom"
                error={!!touched.prenom && !!errors.prenom}
                helperText={touched.prenom && errors.prenom}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date de naissance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date_naissance}
                name="date_naissance"
                error={!!touched.date_naissance && !!errors.date_naissance}
                helperText={touched.date_naissance && errors.date_naissance}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nationalité"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nationalite}
                name="nationalite"
                error={!!touched.nationalite && !!errors.nationalite}
                helperText={touched.nationalite && errors.nationalite}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ville de naissance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ville_naissance}
                name="ville_naissance"
                error={!!touched.ville_naissance && !!errors.ville_naissance}
                helperText={touched.ville_naissance && errors.ville_naissance}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pays de naissance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pays_naissance}
                name="pays_naissance"
                error={!!touched.pays_naissance && !!errors.pays_naissance}
                helperText={touched.pays_naissance && errors.pays_naissance}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Qualité"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.qualite}
                name="qualite"
                error={!!touched.qualite && !!errors.qualite}
                helperText={touched.qualite && errors.qualite}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ancienne qualité"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ancienne_qualite}
                name="ancienne_qualite"
                error={!!touched.ancienne_qualite && !!errors.ancienne_qualite}
                helperText={touched.ancienne_qualite && errors.ancienne_qualite}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date modification"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date_modification}
                name="date_modification"
                error={
                  !!touched.date_modification && !!errors.date_modification
                }
                helperText={
                  touched.date_modification && errors.date_modification
                }
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="departement_naissance"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.departement_naissance}
                name="departement_naissance"
                error={
                  !!touched.departement_naissance &&
                  !!errors.departement_naissance
                }
                helperText={
                  touched.departement_naissance && errors.departement_naissance
                }
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            {values.id = dirigeant.id}
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
    nom: yup.string().required("required"),
    prenom: yup.string().required("required"),
    date_naissance: yup.string().required("required"),
    nationalite: yup.string().required("required"),
    date_modification: yup.date().required("required"),
    ville_naissance: yup.string().required("required"),
    pays_naissance: yup.string().required("required"),
    qualite: yup.string().required("required"),
    ancienne_qualite: yup.string().required("required"),
    adresse: yup.string().required("required"),
  });

export default UpdateDirigeant;
