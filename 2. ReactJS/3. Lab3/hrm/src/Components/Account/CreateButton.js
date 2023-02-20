import {React,} from 'react';
import {Button, Container} from 'reactstrap'

function CreateButton(props) {
    //   const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);

      const handleCreate = () => {
        props.openModal();
      }
    return (
        <div>
            <Container>
                <Button color="primary" onClick={handleCreate}>
                    Create New Account
                </Button>
            </Container>
        </div>
    );
}

export default CreateButton;