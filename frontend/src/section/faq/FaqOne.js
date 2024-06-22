import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Accordion from '../../components/accordian/Accordion'
import { Section, SectionHead } from '../../layout/section/Section'

const FaqOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg="6">
                        <SectionHead>
                            <h2 className="title text-blue">Questions fréquentes</h2>
                            <p>Vous avez une question ? Nous avons des réponses.</p>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col lg="8">
                        <Accordion  variation="1" className="card card-shadow border-0 round-xl" />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default FaqOne
