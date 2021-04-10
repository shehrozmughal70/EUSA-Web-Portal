import React from "react";
import Chatbot from '../components/Chatbot/Bot';
// react plugins that creates an input with a date picker
// reactstrap components
import {
    Button,
    FormGroup,
    Container,
    Modal,
    ModalBody,
    Row,
    Col,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
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
                                color="primary"
                                className="mr-1"
                                onClick={() => setModal1(true)}
                            >
                                Launch Modal
              </Button>
                            <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        type="button"
                                        onClick={() => setModal1(false)}
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">Chat Bot</h4>
                                </div>
                                <ModalBody>
                                    <Chatbot />
                                </ModalBody>
                                <div className="modal-footer">
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={() => setModal1(false)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Modal>
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
