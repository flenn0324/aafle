import React, { Component } from 'react';
import { Form,FormGroup, Button, Col, Container,Row,Label,Input } from 'reactstrap';


class AddressDetails extends Component{

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
            <h3 className='text-center mb-5 text-white bg-blue py-2 border rounded-pill'>Adresse du percipteur</h3>
                    <Form>
                        <FormGroup controlId="formAddresse">
                            <Label>Adresse*</Label>
                            <Input
                                type="text"
                                defaultValue={this.props.inputValues.addresse}
                                name="addresse"
                                required
                                onChange={this.props.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="formComplementAddresse">
                            <Label>Compelment addresse</Label>
                            <Input
                                type="text"
                                defaultValue={this.props.inputValues.compAddresse}
                                name="compAddresse"
                                onChange={this.props.handleChange}
                            />
                        </FormGroup>

                        <Row>
                            <Col>
                            <FormGroup as={Col} controlId="formCode">
                                <Label>Code Postal*</Label>
                                <Input
                                type="number"
                                defaultValue={this.props.inputValues.codePostal}
                                name="codePostal"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            
                            <Col>
                            <FormGroup as={Col} controlId="formVille">
                                <Label>Ville*</Label>
                                <Input type="select" name="ville" defaultValue={this.props.inputValues.ville} onChange={this.props.handleChange}>
                                    <option value="Paris">Paris</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                </Input>
                            </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup as={Col} controlId="formPays">
                                <Label>Pays*</Label>
                                <Input type="select" name="pays" defaultValue={this.props.inputValues.pays} onChange={this.props.handleChange}>
                                    <option value="France">France</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                </Input>
                        </FormGroup>

                            
                        <Row className='mt-3'>
                            <Col className='text-start'>
                                <Button className='bg-danger' onClick={this.back}>Back</Button>{' '}                   
                            </Col>
                            <Col className='text-end'>
                                <Button className='bg-blue' onClick={this.saveAndContinue}>Next</Button> 
                            </Col>
                        </Row>
                    </Form>
                    <p className='text-white mt-3'>Tous les champs * doivent être remplis</p>
                </Container>
        );
    }
}

export default AddressDetails;