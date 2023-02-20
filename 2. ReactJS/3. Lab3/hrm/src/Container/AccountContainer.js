import {React, useState} from 'react';
import CreateButton from '../Components/Account/CreateButton';
import ModalCreateNew from '../Components/Account/ModalCreateNew';
import ResultForm from '../Components/Account/ResultForm';

function AccountContainer(props) {
      const [modal, setModal] = useState(false);
      const [listAccount, setListAccount] = useState([])


    const openModal = () => {
        setModal(true);
    }

    // Khai báo hàm khi nhấn nút Close trên form thêm mới
    const onHandleCloseModal = () => {
        setModal(false);
    };

    // Khai báo callback khi nhấn nut Create ở Input Form
    const onHandleCreateNew = () => {
     console.log("abc");
    }
    return (
        <div>
            {/* Nút tạo mới */}
            <CreateButton openModal={openModal} />
            {/* Form thêm mới Account */}
            <ModalCreateNew isOpen={modal} closeModal={onHandleCloseModal} onHandleCreateNew = {onHandleCreateNew}/>
            {/* Bảng kết quả */}
            <ResultForm />
        </div>
    );
}

export default AccountContainer;