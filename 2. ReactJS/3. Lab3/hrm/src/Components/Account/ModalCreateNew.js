import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNew(props) {

    const handleClose = () => {
         props.closeModal();
    }

    return (
        <Container>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Create New Account</ModalHeader>
                <ModalBody>
                    <InputForm onHandleCreateNew={props.onHandleCreateNew} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleClose}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default ModalCreateNew;
// function Example(args) {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
