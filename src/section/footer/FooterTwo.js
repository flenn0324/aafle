import React from "react"
import { Col, Row, Container } from "reactstrap"
import { Logo } from "../../components/logo/Logo"
import Footer from "../../layout/footer/Footer"
import { LinkInline } from "../../components/styledList/StyledList"
import {  LinkDataThree } from './FooterData'
import { Widget, WidgetTitle } from "../../components/wdiget/Widget"
import logo from '../../images/logo.png'


const FooterTwo = (props) =>{
    return(
        <Footer className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-between py-4 py-md-6">
                    <Col md="6" lg="4">
                        <Widget className="widget-about">
                            <Logo to="/IndexThree"
                            dark ={logo}
                            light ={logo}
                            />
                            <h5 className="d-inline-block ms-1 fst-italic fs-6 mb-4">Agence d'Annonces & de Formalités Légales</h5>
                            <p className="text-white">We denounce with righteous indignation and dislike men who are so beguiled and demora lized by the charms of pleasure.</p>
                        </Widget>
                    </Col>
                    <Col lg="6">
                        <Widget>
                            <WidgetTitle>Liens utiles</WidgetTitle>
                            <LinkInline className="widget-link link-inline-2col link-inline-md-3col g-2 py-2" data={LinkDataThree} />
                        </Widget>
                    </Col>
                </Row>
                <hr className="hr border-light mb-0 mt-n1 border-white border-2"></hr>
                <Row className="g-3 align-items-center justify-content-md-between py-4 text-white">
                    <Col md="8">
                        <div>
                            &copy; Tous droits réservés  2023 .  Made by 
                            <a className="fw-bold text-white" href="https://themeforest.net/user/softnio/portfolio" target="_blank" rel="noreferrer"> Pino </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default FooterTwo
