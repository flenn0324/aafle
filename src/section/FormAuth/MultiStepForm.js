import React, { Component } from 'react';
import AccountDetails from './AccountDetails';
import UserDetails from './UserDetails';
import AdressDetails from './AdressDetails';
import Confirmation from './Confirmation';
import { Col, Container, Row } from 'reactstrap';

class MultiStepForm extends Component {
    state = {
        step: 1 ,
        type : 'Client',
        denominationSociale: '',
        civilite : '',
        nom : '',
        prenom : '',
        prenom2 : '',
        prenom3 : '',
        fonction : '',
        email: '',
        codePostal:'',
        addresse: '',
        compAddresse : '',
        ville: 'Paris',
        pays: 'France',
        telephone: '',
        fix: '',
        password : '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const { step, denominationSociale, civilite ,type, email, addresse,nom,prenom,fonction,codePostal,ville,pays,telephone,fix,password,compAddresse,prenom2, prenom3 } = this.state;
        const inputValues = { denominationSociale, civilite,type, email, addresse, nom,prenom,fonction,codePostal,ville,pays,telephone,fix,password,compAddresse,prenom2, prenom3 };
        switch(step) {
        case 1:
            return (
                <Container fluid>
                    <Row className=' justify-content-center p-5'>
                        <Col md={8} className=' shadow-lg border border-1 rounded p-5 bg-white'>
                            <UserDetails nextStep={this.nextStep} handleChange = {this.handleChange} inputValues={inputValues}/>
                        </Col>
                    </Row>
                </Container>
            )
        case 2:
            return (
                <Container fluid>
                    <Row className=' justify-content-center p-5'>
                        <Col md={8} className='shadow-lg border border-1  rounded p-5 bg-white'>
                            <AdressDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange = {this.handleChange} inputValues={inputValues}/>
                        </Col>
                    </Row>
                </Container>
            )
        case 3:
            return (
            <Container fluid>
                    <Row className=' justify-content-center p-5'>
                        <Col md={8} className='shadow-lg border  border-1  rounded p-5 bg-white'>
                            <AccountDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChange = {this.handleChange} inputValues={inputValues}/>
                        </Col>
                    </Row>
            </Container>
            )
        case 4:
            return (
                <Container fluid>
                    <Row className=' justify-content-center p-5'>
                        <Col md={8} className='shadow-lg border rounded  border-1   p-5 bg-white'>
                            <Confirmation nextStep={this.nextStep} prevStep={this.prevStep} inputValues={inputValues}/>
                        </Col>
                    </Row>
                </Container>            
            )
        }
    }
}

export default MultiStepForm