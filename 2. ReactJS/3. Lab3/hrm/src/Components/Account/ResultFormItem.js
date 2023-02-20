import React from "react";
import { Button } from "reactstrap";

function ResultFormItem(props) {
    return (
        <>
            <tr>
                <td>1</td>
                <td>hiennv@gmail.com</td>
                <td>nvh</td>
                <td>Nguyen Van</td>
                <td>Sale</td>
                <td>DEV</td>
                <td>2023-02-12</td>
                <td>
                    <Button color="warning">Edit</Button>
                </td>
                <td>
                    <Button color="danger">Delete</Button>
                </td>
            </tr>
        </>
    );
}

export default ResultFormItem;
