import React, { useState } from "react";
import FooterTwo from "../../section/footer/FooterTwo";
import TopHeader from "../../section/TopHeader/TopHeader";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";
import {
  Service,
  ServiceIcon,
  ServiceText,
} from "../../components/service/Service"

const Formalites = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="nk-main">
      <TopHeader></TopHeader>

      <h1 className="m-5 p-5">Page formalites legales</h1>

      <Container>
        <Row className="text-center">
          <Button className="my-3" color="danger" onClick={toggle}>
            Demande formalite
          </Button>
        </Row>
      </Container>

      <FooterTwo className="bg-blue is-blue" />

      <Modal
        isOpen={modal}
        backdropTransition={{ timeout: 130 }}
        toggle={toggle}
        size={"xl"}
      >
        <ModalHeader toggle={toggle}>Choix du service</ModalHeader>
        <ModalBody>
          <Container>
            <Row className="justify-content-start text-start g-gs">
              <Col md="6" lg="4">
                <Card className="card-shadow border shadow-lg">
                  <div className="card-inner card-inner-lg">
                    <Service>
                      <ServiceText className="text-center">
                        <h5 className="title text-danger">Accompagner</h5>
                        <p>Vers un rendez-vous</p>
                        <Button className="btn bg-blue" target="_blank" href="/landing/pages/FunctionalPages/Rdv">Clicker ici</Button>
                      </ServiceText>
                    </Service>
                  </div>
                </Card>
              </Col>

              <Col md="6" lg="4">
                <Card className="card-shadow border shadow-lg">
                  <div className="card-inner card-inner-lg">
                    <Service>
                      <ServiceText className="text-center">
                        <h5 className="title text-success">Premium</h5>
                        <p>Vers une demande formalite</p>
                        <Button className="btn bg-blue" target="_blank" href="/landing/pages/FunctionalPages/Rdv">Clicker ici</Button>
                      </ServiceText>
                    </Service>
                  </div>
                </Card>
              </Col>

              <Col md="12" lg="4">
                <Card className="card-shadow border shadow-lg">
                  <div className="card-inner card-inner-lg">
                    <Service>
                      <ServiceText className="text-center">
                        <h5 className="title text-danger">Seul</h5>
                        <p>Vers un service externe</p>
                        <Button className="btn bg-blue" target="_blank" href="/landing/pages/FunctionalPages/Rdv">Clicker ici</Button>
                      </ServiceText>
                    </Service>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Formalites;
