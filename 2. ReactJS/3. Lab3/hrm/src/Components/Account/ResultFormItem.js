import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    let { listAccount } = props;

    // dùng vòng map để render các thành phần trong 1 list dữ liệu;
    let items = listAccount.map((account, index) => {
        return (
            <tr key={index}>
                <td>{account.id}</td>
                <td>{account.email}</td>
                <td>{account.username}</td>
                <td>{account.fullName}</td>
                <td>{account.departmentName}</td>
                <td>{account.positionName}</td>
                <td>{account.createDate}</td>
                <td>
                    <Button color="warning">Edit</Button>
                </td>
                <td>
                    <Button color="danger">Delete</Button>
                </td>
            </tr>
        );
    });

    return items;
}

export default ResultFormItem;
