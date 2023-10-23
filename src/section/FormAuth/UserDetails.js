import React, { Component } from 'react';
import { Form,FormGroup, Button, Col, Container,Row,Label,Input } from 'reactstrap';


class UserDetails extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        return( <Container>
            <h3 className='text-center mb-5 text-white bg-blue py-2 border rounded-pill'>Informations du percipteur</h3>
                    <Form>
                        <Row>
                            <Col>
                            <FormGroup controlId="formtype">
                                <Label className="label">Type*</Label>
                                <Input
                                type="select"
                                defaultValue={this.props.inputValues.type}
                                name="type"
                                required
                                onChange={this.props.handleChange}
                                >
                                <option value="client">Client</option>
                                <option value="DonneurOrdres">Donneur d'ordres</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup controlId="formDenominiation">
                                <Label className="label">Dénomination sociale*</Label>
                                <Input
                                type="text"
                                defaultValue={this.props.inputValues.denominationSociale}
                                name="denominationSociale"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                            <FormGroup controlId="formCivilite">
                                <Label className="label">Civilité*</Label>
                                <Input type="select" name="civilite" required onChange={this.props.handleChange}>
                                <option value="monsieur">Monsieur</option>
                                <option value="madame">Madame</option>
                                <option value="maitre">Maitre</option>
                                </Input>
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup as={Col} controlId="formFonction">
                                <Label className="label">Fonction*</Label>
                                <Input
                                type="select"
                                defaultValue={this.props.inputValues.fonction}
                                name="fonction"
                                required
                                onChange={this.props.handleChange}>
                                <option value="avocat">Avocat</option>
                                <option value="expertcomptable">Expert Comptable</option>
                                <option value="notaire">Notaire</option>
                                <option value="huissier">Huissier</option>
                                <option value="entreprise">Entreprise</option>
                                <option value="autre">Autre</option>
                                </Input>
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <FormGroup as={Col} controlId="formNom">
                                <Label className="label">Nom*</Label>
                                <Input
                                type="text"
                                defaultValue={this.props.inputValues.nom}
                                name="nom"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup as={Col} controlId="formPrenom">
                                <Label className="label">Prénom*</Label>
                                <Input
                                type="text"
                                defaultValue={this.props.inputValues.prenom}
                                name="prenom"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <FormGroup as={Col} controlId="formNom">
                                <Label className="label">Prénom 2</Label>
                                <Input
                                type="text"
                                defaultValue={this.props.inputValues.prenom2}
                                name="prenom2"
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup as={Col} controlId="formPrenom">
                                <Label className="label">Prénom 3</Label>
                                <Input
                                type="text"
                                defaultValue={this.props.inputValues.prenom3}
                                name="prenom3"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <Row className='text-end mt-3'>
                            <div>
                                <Button className='bg-blue' variant="primary" onClick={this.saveAndContinue}>Next</Button>
                            </div>
                        </Row>
                    </Form>
                    <p className='text-white'>Tous les champs * doivent être remplis</p>
                </Container>
        );
    }
}

export default UserDetails;