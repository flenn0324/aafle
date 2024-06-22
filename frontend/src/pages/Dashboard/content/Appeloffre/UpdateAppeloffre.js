import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeadContent from "../../HeadContent";
import { useLocation } from "react-router-dom";
import { useUpdateAppeloffreMutation } from "../../../../store";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const UpdateAppeloffre = (props) => {
  //const[addSociete,results] = useAddSocieteMutation();
  const location = useLocation();
  const { appeloffre } = location.state ? location.state : "";

  const initialValues = {
    type: appeloffre.type,
    nombre_societes: appeloffre.nombre_societes,
    localisation: appeloffre.localisation,
    prestataire_actuel: appeloffre.prestataire_actuel,
    contacter_par: appeloffre.contacter_par,
    cahier_charge: appeloffre.cahier_charge,
    commentaire: appeloffre.commentaire,
    numero_prescripteur: appeloffre.id,
    prescripteur_nom: appeloffre.prescripteur_nom,
    prescripteur_prenom: appeloffre.prescripteur_prenom,
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [UpdateAppeloffre, results] = useUpdateAppeloffreMutation();

  const handleFormSubmit = async (values) => {
    console.log(values);
    await UpdateAppeloffre(values);
    window.location.replace("/admin/appeloffres");
  };

  return (
    <Box m="20px">
      <HeadContent
        title="Modifier une appel d'offre"
        subtitle="Modifier les informations d'une appel d'offre"
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
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormLabel component="legend">Type :</FormLabel>
                <RadioGroup
                  aria-label="type"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel
                    value="Annonce"
                    control={<Radio />}
                    label="Annonce"
                  />
                  <FormControlLabel
                    value="Formalite"
                    control={<Radio />}
                    label="Formalite"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre Societes"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nombre_societes}
                name="nombre_societes"
                error={!!touched.nombre_societes && !!errors.nombre_societes}
                helperText={touched.nombre_societes && errors.nombre_societes}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormLabel component="legend">Localisation :</FormLabel>
                <RadioGroup
                  aria-label="localisation"
                  name="localisation"
                  value={values.localisation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel
                    value="ile de france"
                    control={<Radio />}
                    label="Ile de france"
                  />
                  <FormControlLabel
                    value="france"
                    control={<Radio />}
                    label="France"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Préstataire actuel"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prestataire_actuel}
                name="prestataire_actuel"
                error={
                  !!touched.prestataire_actuel && !!errors.prestataire_actuel
                }
                helperText={
                  touched.prestataire_actuel && errors.prestataire_actuel
                }
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormLabel component="legend">Contacter par</FormLabel>
                <RadioGroup
                  aria-label="contacter_par"
                  name="contacter_par"
                  value={values.contacter_par}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel
                    value="email"
                    control={<Radio />}
                    label="Email"
                  />
                  <FormControlLabel
                    value="téléphone"
                    control={<Radio />}
                    label="Téléphone"
                  />
                  <FormControlLabel
                    value="courrier"
                    control={<Radio />}
                    label="Courrier"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="cahier_charge"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cahier_charge}
                name="cahier_charge"
                error={!!touched.cahier_charge && !!errors.cahier_charge}
                helperText={touched.cahier_charge && errors.cahier_charge}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Durée"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.commentaire}
                name="commentaire"
                error={!!touched.commentaire && !!errors.commentaire}
                helperText={touched.commentaire && errors.commentaire}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            {(values.prescripteur_id = appeloffre.prescripteur_id)}
            {(values.id = appeloffre.id)}
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
  
});

export default UpdateAppeloffre;
