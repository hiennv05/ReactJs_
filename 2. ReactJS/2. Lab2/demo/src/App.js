import { useState } from "react";
import "./App.css";
import ComponentBottom from "./Components/ComponentBottom";
import ComponentTop from "./Components/ComponentTop";

function App() {
    const [data, setData] = useState("");
    let headingTop = "---Component Top---";
    // Khai báo hàm callback nhận dữ liệu từ Top
    let onHandleSendData = (data1) => {
        console.log("Click App!");
        console.log("Data from in put: ", data1);
        setData(data1)
    };

    return (
        <div className="container">
            <div className="App">
                <ComponentTop
                    headingTop={headingTop}
                    onHandleSendData={onHandleSendData}
                />
                <ComponentBottom dataFromInput={data} />
            </div>
        </div>
    );
}

export default App;
