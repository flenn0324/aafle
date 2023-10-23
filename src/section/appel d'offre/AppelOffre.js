import React from "react"
import { Container, Row, Col, Form,Label, Button,FormGroup,Input } from "reactstrap"
import { Section  } from "../../layout/section/Section"



const appeloffre = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container className="justify-content-center bg-white p-5 border border-3 shadow-lg">
                <Row className="text-center mb-5">
                    <h2 className="text-blue">Appel d'offre</h2>
                    <h5>Vous avez une question ?</h5>
                    <p>Remplissez le formulaire de contact ou consultez notre <a href='#faqs'>FAQ</a>  pour plus d'informations.</p>
                </Row>
            <Form>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="name">
          Nom et prénom (prestataire directement)
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Votre nom..."
          type="text"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
    <FormGroup>
          <Label for="exampleCustomSelect">Selectionnez votre société</Label>
          <Input type="select" id="exampleCustomSelect" name="customSelect">
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </Input>
        </FormGroup>
        <p>si vous ne trouvez pas la société, il faut l'ajouter à votre compte <a href="lien vers ajouter societe">ici</a></p>
    </Col>
  </Row>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="contactemail">
          Adresse mail
        </Label>
        <Input
          id="contactemail"
          name="contactemail"
          placeholder="Votre adresse mail..."
          type="email"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="phone">
          Numéro du téléphone
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder="Votre numéro de téléphone..."
          type="number"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
  <Col md={6}>
    <FormGroup>
          <Label for="CheckBoxType">Type</Label>
          <div>
            <Label for="TypeAnnonce" className="mx-2">Annonce </Label>
            <Input type="checkbox" id="TypeAnnonce" label="Annonce" inline />
            <Label for="TypeFormalité" className="mx-2">Formalité </Label>
            <Input type="checkbox" id="TypeFormalité" label="Formalité" inline />
          </div>
        </FormGroup>
</Col>
    <Col md={6}>
    <FormGroup>
          <Label for="CheckBoxLocalisation">Localisation</Label>
          <div>
            <Label for="checkidf" className="mx-2">Ile de France </Label>
            <Input type="checkbox" id="checkidf" label="Ile de France" inline />
            <Label for="checkfrance" className="mx-2">France </Label>
            <Input type="checkbox" id="checkfrance" label="France" inline />
          </div>
        </FormGroup>
    </Col>
  </Row>

  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="numsociete">
          Nombre de société
        </Label>
        <Input
          id="numsociete"
          name="numsociete"
          placeholder="Numéro"
          type="number"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="Prestataire">
           Prestataire actuel 
        </Label>
        <Input
          id="Prestataire"
          name="Prestataire"
          placeholder="Prestataire..."
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
        <FormGroup>
          <Label for="exampleCheckbox">Vous préferez etre contacter par :</Label>
          <div>
            <Label for="exampleCustomRadio" className="mx-2">Téléphone </Label>
            <Input type="radio" id="exampleCustomRadio" name="customRadio" label="Téléphone" />
            <Label for="exampleCustomRadio" className="mx-2">Email </Label>
            <Input type="radio" id="exampleCustomRadio2" name="customRadio" label="Email" />
            <Label for="exampleCustomRadio" className="mx-2">Courrier </Label>
            <Input type="radio" id="exampleCustomRadio3" name="customRadio" label="Courrier" />
          </div>
        </FormGroup>
  </Row>
  <Row>
        <FormGroup>
          <Label for="exampleCustomFileBrowser">Cahier des charges</Label>
          <Input type="file" id="exampleCustomFileBrowser" name="customFile" label="uploader votre Cahier des charges" />
        </FormGroup>
  </Row>

  <Row>
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
  </Row>
  
  <Button className="text-white bg-blue btn-lg">
    Valider
  </Button>
</Form>
            </Container>
        </Section>
    )
}

export default appeloffre