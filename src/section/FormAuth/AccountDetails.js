import React, { Component } from 'react';
import { Form,FormGroup, Button, Col, Container,Row,Label,Input } from 'reactstrap';


class AccountDetails extends Component{

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
            <h3 className='text-center mb-5 text-white bg-blue py-2 border rounded-pill'>Informations du compte</h3>
                    <Form>
                    <Row>
                        <Col>
                        <FormGroup controlId="formEmail">
                            <Label>Adresse email :</Label>
                            <Input
                                type="Email"
                                defaultValue={this.props.inputValues.email}
                                name="email"
                                required
                                onChange={this.props.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="FormConfirmeEmail">
                            <Label>Confirmation email</Label>
                            <Input
                                type="email"
                                name="ConfirmEmail"
                                onChange={this.props.handleChange}
                            />
                        </FormGroup>
                        </Col>
                        </Row>
                        

                        <Row>
                            <Col>
                            <FormGroup as={Col} controlId="formTelephone">
                                <Label>Numéro du téléphone</Label>
                                <Input
                                type="number"
                                defaultValue={this.props.inputValues.telephone}
                                name="telephone"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup as={Col} controlId="formFix">
                                <Label>Numéro du fix</Label>
                                <Input
                                type="number"
                                defaultValue={this.props.inputValues.fix}
                                name="fix"
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            <FormGroup as={Col} controlId="formPassword">
                                <Label>Mot de passe</Label>
                                <Input
                                type="password"
                                name="password"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                            <Col>
                            <FormGroup as={Col} controlId="formConfirmPassword">
                                <Label>Confirmation mot de passe</Label>
                                <Input
                                type="password"
                                name="ConfirmPassword"
                                required
                                onChange={this.props.handleChange}
                                />
                            </FormGroup>
                            </Col>
                        </Row>

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

export default AccountDetails;