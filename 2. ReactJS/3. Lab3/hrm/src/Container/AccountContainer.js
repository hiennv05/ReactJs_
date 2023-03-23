import { React, useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ModalCreateNew from "../Components/Account/ModalCreateNew";
import ResultForm from "../Components/Account/ResultForm";
import Axios from "axios";
import { getListAccountAPI, addNewAccountAPI } from "../API/AccountApi";
import { getListDepartmentAPI } from "../API/DepartmentApi";
import StoreRedux from "../Redux/Store/StoreRedux";
import { actionCloseForm } from "../Redux/Action/FormAction";
function AccountContainer(props) {
    // const [showForm, setShowForm] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [listDepartments, setListDepartments] = useState([]);
    const [listPositions, setListPositions] = useState([]);

    // const onHandleCreateButton = () => {
    //     setShowForm(true);
    // };

    // // Khai báo hàm khi nhấn nút Close trên form thêm mới
    // const onHandleCloseModal = () => {
    //     setShowForm(false);
    // };
    // let createAccount = (accountNew) => {
    //     addNewAccountAPI(accountNew).then((res) => {
    //         //res: account vua dc them
    //         // res: create new success
    //         // call api lay list account =>> setListAccount
    //         // fetchListAccount();
    //         setListAccount(res);
    //     });
    // }
    // Khai báo callback khi nhấn nut Create ở Input Form
    const onHandleCreateNew = (accountNew) => {
        //  console.log("abc");
        // listAccount.push(accountNew);
        // setListAccount(listAccount); //re-render lại trang
        // // Lưu trữ dữ liệu tạm vào localStorage
        // // Chuyển từ object qua dạng chuỗi
        // localStorage.setItem("listAccount", JSON.stringify(listAccount));

        // Đóng form khi create xong

        // createAccount(accountNew);
        addNewAccountAPI(accountNew).then((res) => {
            fetchListAccount();
        });
        StoreRedux.dispatch(actionCloseForm());

        // setShowForm(false);
    };
    // Load data tu Account, Departments, Position
    let fetchListAccount = () => {
        getListAccountAPI().then((listAccountAPI) => {
            setListAccount(listAccountAPI.content);
        });
    };

    let fetchListDepartments = () => {
        Axios.get(`http://localhost:8080/api/v1/departments`).then((res) => {
            // console.log(res.data);
            let listDepartments = res.data;
            setListDepartments(listDepartments);
        });
    };

    let fetchListDepartments2 = () => {
        getListDepartmentAPI().then((listDepartments_Api) => {
            console.log("listDep", listDepartments_Api);
            setListDepartments(listDepartments_Api);
        });
    };
    let fetchListPositions = () => {
        Axios.get(`http://localhost:8080/api/v1/positions`).then((res) => {
            // console.log(res.data);
            let listPositions = res.data;
            setListPositions(listPositions);
        });
    };
    // Khai báo hàm lấy dữ liệu khi load trang thành công
    // Tương đương Component didMount(); gọi duy nhất 1 lần
    useEffect(() => {
        fetchListDepartments();
        // fetchListDepartments2();
        fetchListPositions();
        fetchListAccount();
    }, []);

    // useEffect(() => {
    //     // Load dữ liệu từ localStorage vào ListAccount(state)
    //     // Kiểm tra có dữ liệu dưới LocalStorage hay không
    //     // Chuyển đổi từ chuỗi về object
    //     // if (localStorage && localStorage.getItem("listAccount")) {
    //     //     let listAccounts = JSON.parse(localStorage.getItem("listAccount"));
    //     //     setListAccount(listAccounts);
    //     // }
    // }, []);

    return (
        <div>
            {/* Nút tạo mới */}
            <CreateButton />
            {/* Form thêm mới Account */}
            <ModalCreateNew
                // showForm={showForm}
                // closeModal={onHandleCloseModal}
                onHandleCreateNew={onHandleCreateNew}
                listDepartments={listDepartments}
                listPositions={listPositions}
            />
            {/* Bảng kết quả */}
            <ResultForm listAccount={listAccount} />
        </div>
    );
}

export default AccountContainer;
