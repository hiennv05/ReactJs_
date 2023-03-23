import React from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
} from "reactstrap";
import InputForm from "./InputForm";
import StoreRedux from "../../Redux/Store/StoreRedux";
import { actionCloseForm } from "../../Redux/Action/FormAction";

function ModalCreateNew(props) {
    const handleClose = () => {
        // props.closeModal();
        StoreRedux.dispatch(actionCloseForm());

    };

    // Kết nối Redux để lấy State show form về sử dụng
    let showFormFromStore = useSelector((state) => state.formReducer.showForm);
    return (
        <Container>
            <Modal isOpen={showFormFromStore}>
                <ModalHeader>Create New Account</ModalHeader>
                <ModalBody>
                    <InputForm
                        onHandleCreateNew={props.onHandleCreateNew}
                        listDepartments={props.listDepartments}
                        listPositions={props.listPositions}
                    />
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
