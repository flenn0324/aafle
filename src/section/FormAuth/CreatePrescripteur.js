import React, { useState } from "react";
import { Container,Spinner,Alert, Button} from "reactstrap";
import { Box, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useAddPrescripteurMutation } from "../../store";
import { useRegisterUserMutation } from "../../store";
import { useLoginUserMutation } from "../../store";
import { NioIcon } from "../../components/icon/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePrescripteur = () => {
  const [addprescripteur, results] = useAddPrescripteurMutation();
  const [register, resultsUser] = useRegisterUserMutation();
  const [login, resultsLogin] = useLoginUserMutation();

  const [loading, setLoading] = useState(false);
  const [errorVal, setError] = useState("");

  const notifySucces = () =>
    toast.success("Succès !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyEchec = () =>
    toast.error("Echec ! ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const initialValues = {
    nom: "",
    prenom1: "",
    prenom2: "",
    prenom3: "",
    type_utilisateur: "",
    denomination_sociale: "",
    civilite: "",
    fonction: "",
    adresse: "",
    telephone: "",
    fix: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const calladdprescripteur = async (valuespresc,valueLogin) => {
    const response2 = await addprescripteur(valuespresc);

    if (response2.data) {
      console.log("SUUUCCCCESSS Prescripteur created :", response2);
      notifySucces()
      const responseLogin = await login(valueLogin);
      if (responseLogin.data) {
        console.log("Login :", responseLogin.data.data.token);
        localStorage.setItem("accessToken", responseLogin.data.data.token);
        localStorage.setItem("nom", responseLogin.data.data.user.name);
        localStorage.setItem("role", responseLogin.data.data.user.role);
        setTimeout(() => {
          window.history.pushState(
            `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
            "auth-login",
            `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
          );
          window.location.reload();
        }, 2000);
      } else {
        setTimeout(() => {
          setError("Cannot login with credentials");
          setLoading(false);
        }, 2000);
      }
    } else {
      notifyEchec()
      console.log("ERROR Prescrpteur not created ERROR :", response2);
      setError("Error dans la création du prescripteur");
      setLoading(false)
    }
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    setLoading(true);
    console.log(values);

    const valuesuser = {
      name: values.nom,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    };
    const valueLogin = {
      email: values.email,
      password: values.password,
    };
    const valuespresc = {
      nom: values.nom,
      prenom1: values.prenom1,
      prenom2: values.prenom2,
      prenom3: values.prenom3,
      type_utilisateur: values.type_utilisateur,
      denomination_sociale: values.denomination_sociale,
      civilite: values.civilite,
      fonction: values.fonction,
      adresse: values.adresse,
      telephone: values.telephone,
      fix: values.fix,
      token: "",
    };

    //ADD USER APPEL
    const response = await register(valuesuser);
    if (response.data) {
      localStorage.clear();
      localStorage.setItem("accessToken", response.data.data.token);
      const authToken = localStorage.getItem("accessToken");

      valuespresc.token = authToken;
      notifySucces()

      const responsePrescripteur = await calladdprescripteur(valuespresc,valueLogin);


    } else {
      notifyEchec()
      setLoading(false)
      console.log("ERROR Login :", resultsUser)
      setError("Error dans la création du compte");
    }
  };

  return (
    <Container className="my-5">
      <h3 className="text-center mb-5 text-white bg-blue py-2 border rounded-pill">
        Informations du prescripteur
      </h3>
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
                <FormLabel component="legend">Civilité :</FormLabel>
                <RadioGroup
                  aria-label="civilite"
                  name="civilite"
                  value={values.civilite}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel value="Mr" control={<Radio />} label="Mr" />
                  <FormControlLabel
                    value="Mme"
                    control={<Radio />}
                    label="Mme"
                  />
                  <FormControlLabel
                    value="Maitre"
                    control={<Radio />}
                    label="Maitre"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormLabel component="legend">Type utilisateur :</FormLabel>
                <RadioGroup
                  aria-label="type_utilisateur"
                  name="type_utilisateur"
                  value={values.type_utilisateur}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel
                    value="client"
                    control={<Radio />}
                    label="Client"
                  />
                  <FormControlLabel
                    value="donneur_dordre"
                    control={<Radio />}
                    label="Donneur d'ordre"
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dénomination sociale"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.denomination_sociale}
                name="denomination_sociale"
                error={
                  !!touched.denomination_sociale &&
                  !!errors.denomination_sociale
                }
                helperText={
                  touched.denomination_sociale && errors.denomination_sociale
                }
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
                label="Prénom 2"
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
                label="Prénom 3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.prenom3}
                name="prenom3"
                error={!!touched.prenom3 && !!errors.prenom3}
                helperText={touched.prenom3 && errors.prenom3}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormLabel component="legend">Fonction :</FormLabel>
                <RadioGroup
                  aria-label="fonction"
                  name="fonction"
                  value={values.fonction}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  row
                >
                  <FormControlLabel
                    value="avocat"
                    control={<Radio />}
                    label="Avocat"
                  />
                  <FormControlLabel
                    value="function2"
                    control={<Radio />}
                    label="function2"
                  />
                  <FormControlLabel
                    value="function3"
                    control={<Radio />}
                    label="function3"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Numéro téléphone "
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telephone}
                name="telephone"
                error={!!touched.telephone && !!errors.telephone}
                helperText={touched.telephone && errors.telephone}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="fix"
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
                label="Adresse"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adresse}
                name="adresse"
                error={!!touched.adresse && !!errors.adresse}
                helperText={touched.adresse && errors.adresse}
                sx={{ gridColumn: "span 4" }}
              />
              <h5>Informations du compte</h5>
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Adresse email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirmation de mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password_confirmation}
                name="password_confirmation"
                error={
                  !!touched.password_confirmation &&
                  !!errors.password_confirmation
                }
                helperText={
                  touched.password_confirmation && errors.password_confirmation
                }
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button size="lg" className="btn-block bg-blue" type="submit">
                {loading ? (
                  <Spinner size="sm" color="primary" />
                ) : (
                  "Valider"
                )}
              </Button>
            </Box>
            {errorVal && (
                <div className="mb-3">
                  <Alert color="danger" className="alert-icon">
                    {" "}
                    <NioIcon icon="alert-circle" /> Impossible de créer un compte 
                    avec ces informations{" "}
                  </Alert>
                </div>
              )}
          </form>
        )}
      </Formik>
      <p className="text-white mt-3">Tous les champs * doivent être remplis</p>
      <ToastContainer />
    </Container>
  );
};

const checkoutSchema = yup.object().shape({
  nom: yup.string().required("required"),
  prenom1: yup.string().required("required"),
  denomination_sociale: yup.string().required("required"),
  type_utilisateur: yup.string().required("required"),
  civilite: yup.string().required("required"),
  fonction: yup.string().required("required"),
  adresse: yup.string().required("required"),
  telephone: yup.string().required("required"),
  fix: yup.string().required("required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])/,
      "Password must contain at least one number and one uppercase letter"
    )
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .required("Please re-type your password")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export default CreatePrescripteur;
