import React from "react"
import { Container, Row, Col, Form,Label, Button,FormGroup,Input } from "reactstrap"
import { Section  } from "../../layout/section/Section"



const rdvform = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container className="justify-content-center bg-white py-5 border border-3 shadow-lg">
                <Row className="text-center mb-5">
                    <h2 className="text-blue">Service Client</h2>
                    <h5>Vous voulez programmer un rendez-vous ?</h5>
                    <p className="text-black">Remplissez le formulaire pour pouvoir demander votre rendez-vous dés maintenant</p>
                </Row>
            <Form>
  <Row className="justify-content-center">
    <Col md={8}>
      <FormGroup>
        <Label for="name">
          Nom et Prénom
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Votre nom..."
          type="text"
          disable
        />
      </FormGroup>
    </Col>
    <Col md={8}>
      <FormGroup>
        <Label for="pname">
          Sociéte
        </Label>
        <Input
          id="pname"
          name="pnale"
          placeholder="Selectionner la sociéte ..."
          type="text"
        />
      </FormGroup>
    </Col>
    <Col md={8}>
      <FormGroup>
        <Label for="daterdv">
          Date du rendez vous
        </Label>
        <Input
          id="daterdv"
          name="daterdv"
          type="date"
        />
      </FormGroup>
    </Col>
    <Col md={8}>
      <FormGroup>
        <Label for="heurerdv">
          Heure du rendez vous
        </Label>
        <Input
          id="heurerdv"
          name="heurerdv"
          type="time"
        />
      </FormGroup>
    </Col>
  <Col md={8}>
  <FormGroup>
    <Label for="objet">
      Objet du message
    </Label>
    <Input
      id="objet"
      name="objet"
      type="select"
    >
      <option  value="1">
        1
      </option>
      <option  value="2">
        2
      </option>
    </Input>
  </FormGroup>
  </Col>
  <Col md={8}>
  <FormGroup>
    <Label for="message">
      Message
    </Label>
    <Input
      id="message"
      name="message"
      type="textarea"
    />
  </FormGroup>
  </Col>
  </Row>
  <div className="text-center my-3">
  <Button className="text-blue bg-white btn-lg">
    Valider
  </Button>
  </div>
</Form>
            </Container>
        </Section>
    )
}

export default rdvform