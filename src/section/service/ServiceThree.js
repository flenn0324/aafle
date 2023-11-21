import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Section, SectionContant, SectionHead } from "../../layout/section/Section"
import SadEmoji from "../../components/svg/SadEmoji"
import DizzyEmoji from "../../components/svg/DizzyEmoji"
import HappyEmoji from "../../components/svg/HappyEmoji"
import Check from "../../components/svg/Check"
import NonCheck from "../../components/svg/NonCheck"
import {Link} from "../../components/button/Button"


const ServiceThree = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col xs="9" sm="7" md="6">
                        <SectionHead>
                            <h2 className="title border-top border-bottom border-2 border-primary py-2">Pourquoi nous choisir ?</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className="justify-content-start text-start g-gs">
                        <Col md="6" lg="4">
                            <Card className="card-shadow mt-4">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="text-center text-danger mb-0 pb-2">
                                            <DizzyEmoji />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h3 className="title text-center text-danger">Vous-même</h3>
                                            <h5>Fastidieux et chronophage</h5>
                                            <ul>
                                                <li><span className="text-success"> <Check></Check> </span>Gain d’argent : 0 €</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Pertes de chiffre d’affaires</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Démarches complexes et incompréhensibles</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Domaine juridique complexe</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Stress et impuissance</li>
                                            </ul>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>

                        <Col md="6" lg="4">
                            <Card className="card-shadow border shadow-lg">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="text-center text-success mb-0 pb-2">
                                            <HappyEmoji />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h3 className="title text-center text-success">Facile et rapide</h3>
                                            <ul>
                                                <li><span className="text-success"> <Check></Check> </span>Gain d’argent : Optimisation des coûts</li>
                                                <li><span className="text-success"> <Check></Check> </span>Prospectez vos clients</li>
                                                <li><span className="text-success"> <Check></Check> </span>Simplicité, sécurisation et rapidité de vos démarches</li>
                                                <li><span className="text-success"> <Check></Check> </span>Une équipe d’expert spécialisé à votre écoute vous accompagne</li>
                                                <li><span className="text-success"> <Check></Check> </span>Sans stress</li>
                                            </ul>                                        
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>

                        <Col md="12" lg="4">
                            <Card className="card-shadow mt-4">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="text-center text-danger mb-0 pb-2">
                                            <SadEmoji />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h3 className="title text-center text-danger">Les autres</h3>
                                            <h5>Coûteux et sans transparence</h5>
                                            <ul>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Gain d’argent : non maîtrisé</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Mise en concurrence</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Perte de temps importante</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Aucun indépendant n'a près de 35 années d’ancienneté</li>
                                                <li><span className="text-danger"><NonCheck></NonCheck></span>Stress modéré</li>
                                            </ul>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='mt-5 text-center'>
                        <div md='3'>
                            <Link to={`${process.env.PUBLIC_URL}/pages/SitePages/ContactPage`} target="_blank" rel="noreferrer" className="btn text-white bg-blue btn-lg">Contactez-nous</Link>
                        </div>
                    </Row>
                </SectionContant>
            </Container>

        </Section>
    )
}

export default ServiceThree
