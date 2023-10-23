import React, { Component } from 'react';
import { Button, Container,Row,Col } from 'reactstrap';

class Confirmation extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        const {inputValues : { denominationSociale, civilite,type, email, addresse, nom,prenom,fonction,codePostal,ville,pays,telephone,fix,password,compAddresse} }= this.props;

        return(
            <Container>
                <h2 className=' text-center text-white bg-blue py-2 border rounded-pill'>Confirmation</h2>
                <h5 className='text-center mb-5'>Confirmez si les infromations déjà saisies sont corretes.</h5>
                <Row className='border px-5 py-4 mb-4'>
                    <h5 className='text-center mb-2 text-decoration-underline'>Informations du percipteur</h5>
                    <p> <strong>Dénomination Sociale :</strong> {denominationSociale}</p>
                    <p> <strong>Civilité :</strong> {civilite}</p>
                    <p> <strong>Type :</strong> {type}</p>
                    <p> <strong>Nom :</strong>  {nom}</p>
                    <p> <strong>Prénom :</strong>  {prenom}</p>
                    <p> <strong>Fonction :</strong>  {fonction}</p>
                </Row>
                <Row className='border mb-5'>
                    <Col className='border p-4'>
                    <h5 className='text-center mb-2 text-decoration-underline'>Adresse</h5>
                    <p> <strong>Adresse : </strong> {addresse}</p>
                    <p> <strong>Compliment d'adresse : </strong> {compAddresse}</p>
                    <p> <strong>Code Postal :</strong> {codePostal}</p>
                    <p> <strong>Ville :</strong> {ville}</p>
                    <p> <strong>Pays :</strong> {pays}</p>
                    </Col>
                    <Col className='border p-4'>
                    <h5 className='text-center mb-2 text-decoration-underline'>Contact</h5>
                    <p> <strong>Email :</strong> {email}</p>
                    <p> <strong>Numéro du téléphone :</strong> {telephone}</p>
                    <p> <strong>Numéro Fix :</strong> {fix}</p>
                    </Col>
                </Row>
                
                <Row className='mt-3'>
                            <Col className='text-start'>
                                <Button className='bg-danger' onClick={this.back}>Back</Button>{' '}                   
                            </Col>
                            <Col className='text-end'>
                                <Button className='bg-blue'>Confirmer</Button> 
                            </Col>
                </Row>
            </Container>
        )
    }
}

export default Confirmation;