import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Service, ServiceIcon, ServiceText } from '../../components/service/Service'
import { Paper, Shield, Analytics } from '../../components/svg/Icon'
import  {Section, SectionContant, SectionHead } from '../../layout/section/Section'
import {Link} from "../../components/button/Button"


const NosServices = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col xs="9" sm="7" md="6">
                        <SectionHead>
                            <h2 className="title border-top border-bottom border-2 border-primary py-2">Un accès simple et rapide à vos formalités</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className='justify-content-center text-center g-gs'>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-primary">
                                    <Paper />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Vous rédigez et signez vos actes ...</h4>
                                    <p>
                                        Constitution, modification, radiation, cession de fonds de commerce, apport d’actif, fusion, transmission universelle de patrimoine ... Nous seuls, nous préoccupons de les rendre opposables aux tiers. Externalisez ainsi vos formalités légales et libérez-vous avec sérénité de l’étude approfondie des documents avant la réalisation appropriée de vos annonces légales et formalités juridiques.
                                    </p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-pink">
                                    <Shield />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Service sur-mesure</h4>
                                    <p>Notre équipe d'experts vous assure un service Sur-mesure et prend votre relais avec réactivité et compétence. Un savoir-faire rigoureux porté par l’expertise de notre site unique, de l’actualisation de nos fiches utiles à notre annuaire des organismes géo localisé par votre code postal ou commune. Un savoir-être, même en urgence, entre confiance et proximité avec vous. Là sont nos solutions d’accompagnement qui s’adaptent à votre tranquillité.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-success">
                                    <Analytics />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Vous obtenez votre extrait K-bis !</h4>
                                    <p>Nous respectons scrupuleusement le contenu des annonces légales, le renseignement des liasses destinées au Centre de Formalités des Entreprises de la Chambre de commerce ou de Métiers, au Registre du commerce et des sociétés, la transmission des documents nécessaires et suffisants à l’appui de vos demandes au Greffe du Tribunal de commerce. Mettez à profit votre temps pour développer votre chiffre d’affaires, nous nous occupons de vos obligations déclaratives. C’est notre métier.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                    </Row>
                    <Row className='mt-5 text-center'>
                        <div md='3'>
                            <Link to={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Rdv`} target="_blank" className="btn text-white bg-blue btn-lg">Demander une formalité</Link>
                        </div>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export default NosServices