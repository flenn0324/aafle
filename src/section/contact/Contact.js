import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  FormGroup,
  Input,
} from "reactstrap";
import { Section } from "../../layout/section/Section";
import Phone from "../../components/svg/Phone";
import Mail from "../../components/svg/Mail";
import Clock from "../../components/svg/Clock";
import Adress from "../../components/svg/Adress";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i96792m",
        "template_4cbqlq6",
        form.current,
        "P2gOXfzuf2yRRWXVH"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("gg succes");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section
      className={props.className && props.className}
      id={props.id && props.id}
    >
      <Container className="justify-content-center bg-white p-5 border shadow-lg">
        <Row className="text-center mb-5">
          <h2 className="text-blue">Contactez nous</h2>
          <h5>Vous avez une question ?</h5>
          <p>
            Remplissez le formulaire de contact ou consultez notre
            FAQ pour plus d'informations.
          </p>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <Row className="p-3">
              <Col md={6} className="text-start ">
                <div className="border py-3 shadow px-3">
                  <h4 className="text-blue text-decoration-underline py-2 ms-4">
                    <span className="me-2">
                      <Adress />
                    </span>
                    Adresse
                  </h4>
                  <p>219, Boulevard Pereire </p>
                  <p>75017 Paris</p>
                </div>
              </Col>
              <Col md={6} className="text-start">
                <div className="border py-3 shadow px-3">
                  <h4 className="text-blue text-decoration-underline py-2 ms-5">
                    <span className="me-2">
                      <Mail />
                    </span>
                    Email
                  </h4>
                  <p>info@example.com</p>
                  <p>contact@formalites-legales.fr</p>
                </div>
              </Col>
            </Row>
            <Row className="p-3">
              <Col md={6} className="text-start">
                <div className="border py-3 shadow px-3">
                  <h4 className="text-blue text-decoration-underline py-2 ms-5">
                    <span className="me-2">
                      <Clock />
                    </span>
                    Horaire
                  </h4>
                  <p>Lundi - Vendredi</p>
                  <p>9:00 - 18:00</p>
                </div>
              </Col>
              <Col md={6} className="text-start">
                <div className="border py-3 shadow px-3">
                  <h4 className="text-blue text-decoration-underline py-2 ms-4">
                    <span className="me-2">
                      <Phone />
                    </span>
                    Téléphone
                  </h4>
                  <p>01 42 93 52 23</p>
                  <p>01 42 93 61 18</p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={6}>
            <form ref={form} onSubmit={sendemail}>
              <Row>
                <Col md={6} sm={12}>
                  <FormGroup>
                    <Label for="user_name">Nom</Label>
                    <Input
                      id="user_name"
                      name="user_name"
                      placeholder="Votre nom..."
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="user_pname">Prénom</Label>
                    <Input
                      id="user_pname"
                      name="user_pname"
                      placeholder="Votre Prénom..."
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="user_email">Adresse mail</Label>
                    <Input
                      id="user_email"
                      name="user_email"
                      placeholder="Votre adresse mail..."
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="user_phone">Numéro du téléphone</Label>
                    <Input
                      id="user_phone"
                      name="user_phone"
                      placeholder="Votre numéro de téléphone..."
                      type="number"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input id="message" name="message" type="textarea" />
                </FormGroup>
              </Row>

              <Button className="text-white bg-blue">Envoyer le message</Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Contact;
