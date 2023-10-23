import React from "react"
import { Container, Row, Col, Form,Label,FormGroup,Input } from "reactstrap"




const search = (props) =>{
    return(
            <Container className="justify-content-center bg-white p-5 border mt-5">
                <Row className="text-center mb-5">
                    <h2 className="text-blue">Liste des annuaires</h2>
                    <h5>Vous recherchez une </h5>
                    <p className="text-black">Recherchez les differentes ............. en tapant votre code postale ou votre ville</p>
                </Row>
                <Form>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSearch">Code postal</Label>
                            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSearch">Ville</Label>
                            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" />{' '}
                                <p className="text-black"> Afficher les chambres ......</p>
                            </Label>
                        </FormGroup>
                    </Row>
                    <Row className="mb-3">
                        <FormGroup check>
                            <Label check>
                            <Input type="radio" />{' '}
                                <p className="text-black"> Afficher les chambres ......</p>
                            </Label>
                        </FormGroup>
                    </Row>
                </Form>
            </Container>
    )
}

export default search