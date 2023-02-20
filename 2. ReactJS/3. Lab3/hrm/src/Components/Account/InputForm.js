import { React, useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";

function InputForm(props) {
    // Destructuring
    const { onHandleCreateNew } = props;

    // Khai báo quản lí dữ liệu form
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");
    const [Fullname, setFullname] = useState("");
    const [Department, setDepartment] = useState("");
    const [Position, setPosition] = useState("");

    //Khai báo hàm handleCrate
    const handleCreate = () => {
        //     console.log("Email: ", Email);
        //     console.log("Username: ", Username);
        //     console.log("Fullname: ", Fullname);
        //     console.log("Department: ", Department);
        onHandleCreateNew();
    };

    return (
        <Container>
            <Form>
                <FormGroup>
                    {/* Email */}
                    <Label for="exampleEmail">Email:</Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Input Email"
                        type="email"
                        value={Email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </FormGroup>
                {/* Username */}
                <FormGroup>
                    <Label for="Username">Username:</Label>
                    <Input
                        id="examplePassword"
                        name="username"
                        placeholder="Input Username"
                        type="text"
                        value={Username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </FormGroup>
                {/* Full name */}
                <FormGroup>
                    <Label for="Fullname">Fullname:</Label>
                    <Input
                        id="examplePassword"
                        name="username"
                        placeholder="Input Fullname"
                        type="text"
                        value={Fullname}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                    />
                </FormGroup>
                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department:</Label>
                    <Input
                        id="Department"
                        name="Department"
                        type="select"
                        value={Department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                        }}
                    >
                        <option value={"Bán hàng"}>Bán hàng</option>
                        <option value={"Bảo vệ"}>Bảo vệ</option>
                        <option value={"Giám đốc"}>Giám đốc</option>
                        <option value={"Kỹ thuật"}>Kỹ thuật</option>
                        <option value={"Marketing"}>Marketing</option>
                    </Input>
                    {/* Position */}
                </FormGroup>
                <FormGroup>
                    <Label for="Position">Select a Position:</Label>
                    <Input
                        id="position"
                        name="position"
                        type="select"
                        value={Position}
                        onChange={(e) => {
                            setPosition(e.target.value);
                        }}
                    >
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"PM"}>PM</option>
                        <option value={"BOD"}>BOD</option>
                    </Input>
                </FormGroup>
                {/* Nút xử lý */}

                <Button color="success" onClick={handleCreate}>
                    Create
                </Button>
                <Button color="danger">Reset</Button>
            </Form>
        </Container>
    );
}

export default InputForm;
