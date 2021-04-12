import React from "react";
import Chatbot from '../components/Chatbot/Bot';
// react plugins that creates an input with a date picker
// reactstrap components
import {
    Button,
    Container,
    Modal,
    ModalBody,
    Row,
    Col,
} from "reactstrap";

// core components

function Javascript() {
    const [modal1, setModal1] = React.useState(false);
    const [modal2, setModal2] = React.useState(false);
    return (
        <>
            <div className="section section-javascript" id="javascriptComponents">
                <Container>
                    <Row id="modals">
                        <Col md="6">
                            <Button
                                color="info"
                                className="mr-1"
                                onClick={() => setModal1(true)}
                            >
                                Launch Modal
                            </Button>
                            <Chatbot />

                        </Col>

                        <br></br>
                        <br></br>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Javascript;
