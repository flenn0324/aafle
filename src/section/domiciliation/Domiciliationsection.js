import React from 'react'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Section } from '../../layout/section/Section'
import {Link} from "../../components/button/Button"


const Domiciliationsection = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container fluid className='bg-white'>
            <h1 className='text-blue text-center mb-5'>Domiciliation commerciale</h1>
            <Row className="">
                <Col lg="6" className='border p-5'>
                    <h2 className='text-blue text-center mb-4'>Présentation</h2>
                    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                <Col lg="6" className='border p-5'>
                    <h3 className='text-blue mb-5'>Obtenez votre ....</h3>
                    <Row>
                        <FormGroup>
                            <Label for="exampleSelect">Selectionnez votre société : </Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="pname">Selectionnez votre société : </Label>
                            <Input type="text" name="pname" id="pname" placeholder='test...'></Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label for="name">Selectionnez votre société : </Label>
                            <Input type="text" name="name" id="name" placeholder='test...'></Input>
                        </FormGroup>
                    </Row>
                    <Row className='mt-5 text-center'>
                        <div md='3'>
                            <Link to={`${process.env.PUBLIC_URL}/pages/FunctionalPages/Rdv`} target="_blank" className="btn text-white bg-blue btn-lg">Generer un PDF</Link>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default Domiciliationsection