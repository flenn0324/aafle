import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";

import { Form, Spinner, Alert, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NioIcon } from "../../components/icon/Icon";
import TopHeader from "../../section/TopHeader/TopHeader";
import { useLoginUserMutation } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [login, results] = useLoginUserMutation();

  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const notifySucces = () =>
    toast.success("Vous êtes connecté avec succès!", {
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
    toast.error("Echec de connexion ! ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const onFormSubmit = async (formData) => {
    setLoading(true);
    const response = await login(formData);
    if (response.data) {
      console.log("Login :", response.data.data.token);
      localStorage.setItem("accessToken", response.data.data.token);
      localStorage.setItem("nom", response.data.data.user.name);
      localStorage.setItem("role", response.data.data.user.role);
      notifySucces();
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
        notifyEchec();
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);
    }
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <TopHeader></TopHeader>
      <Head title="Login" />
      <PageContainer>
        <div className="nk-block nk-block-middle nk-auth-body wide-xs">
          <div className="brand-logo pb-4 text-center">
            <Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
              <img
                className="logo-light logo-img logo-img-lg"
                src={Logo}
                alt="logo"
              />
              <img
                className="logo-dark logo-img logo-img-lg"
                src={LogoDark}
                alt="logo-dark"
              />
            </Link>
          </div>

          <div className="card-preview card-bordered">
            <div className="card-inner card-inner-lg">
              <div className="nk-block-head">
                <div className="nk-block-content">
                  <h5 className="nk-block-title page">Se connecter</h5>
                </div>
              </div>

              {errorVal && (
                <div className="mb-3">
                  <Alert color="danger" className="alert-icon">
                    {" "}
                    <NioIcon icon="alert-circle" /> Impossible de se connecter
                    avec ces informations{" "}
                  </Alert>
                </div>
              )}

              <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-01">
                      Email
                    </label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      id="default-01"
                      name="email"
                      ref={register({ required: "This field is required" })}
                      defaultValue="info@softnio.com"
                      placeholder="Enter your email address"
                      className="form-control-lg form-control"
                    />
                    {errors.email && (
                      <span className="invalid">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="password">
                      Mot de passe
                    </label>
                    <Link
                      className="link text-blue link-sm"
                      to={`${process.env.PUBLIC_URL}/pages/auths/auth-forgotpassword`}
                    >
                      Mot de passe oublié?
                    </Link>
                  </div>

                  <div className="form-control-wrap">
                    <a
                      href="#password"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setPassState(!passState);
                      }}
                      className={`form-icon lg form-icon-right passcode-switch ${
                        passState ? "is-hidden" : "is-shown"
                      }`}
                    >
                      <NioIcon
                        icon="eye"
                        className="passcode-icon icon-show"
                      ></NioIcon>

                      <NioIcon
                        icon="eye-off"
                        className="passcode-icon icon-hide"
                      ></NioIcon>
                    </a>
                    <input
                      type={passState ? "text" : "password"}
                      id="password"
                      name="password"
                      defaultValue="123456"
                      ref={register({ required: "This field is required" })}
                      placeholder="Enter your passcode"
                      className={`form-control-lg form-control ${
                        passState ? "is-hidden" : "is-shown"
                      }`}
                    />
                    {errors.password && (
                      <span className="invalid">{errors.password.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <Button size="lg" className="btn-block bg-blue" type="submit">
                    {loading ? (
                      <Spinner size="sm" color="primary" />
                    ) : (
                      "Se connecter"
                    )}
                  </Button>
                </div>
              </Form>

              <div className="form-note-s2 text-center pt-4">
                {" "}
                Nouveau dans la platforme ?{" "}
                <Link
                  className="text-blue"
                  to={`${process.env.PUBLIC_URL}/pages/auths/auth-register`}
                >
                  Créer un compte
                </Link>
              </div>
            </div>
          </div>
        </div>
        <AuthFooter />
        <ToastContainer />
      </PageContainer>
    </React.Fragment>
  );
};
export default Login;
