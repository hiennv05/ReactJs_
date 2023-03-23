import { React } from "react";
import { Button, Container } from "reactstrap";
import { actionShowForm } from "../../Redux/Action/FormAction";
import StoreRedux from "../../Redux/Store/StoreRedux";

function CreateButton(props) {
    //   const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);

    const handleCreateNew = () => {
        StoreRedux.dispatch(actionShowForm());
    };
    return (
        <div>
            <Container>
                <Button color="primary" onClick={handleCreateNew}>
                    Create New Account
                </Button>
            </Container>
        </div>
    );
}

export default CreateButton;
