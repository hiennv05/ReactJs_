import "./App.css";
import ComponentBottom from "./Components/ComponentBottom";
import ComponentTop from "./Components/ComponentTop";

function App() {
    let x = 10;
    let y = 20;
    let headingTop = "---Component Top---";
    // Khai báo hàm callback nhận dữ liệu từ Top
    let onHandleSendData = (data) => {
        console.log("Click App!");
        console.log(data);
    };
    return (
        <div className="container">
            <div className="App">
                <ComponentTop
                    x={x}
                    y={y}
                    headingTop={headingTop}
                    onHandleSendData={onHandleSendData}
                />
                <ComponentBottom onHandleSendData={onHandleSendData} />
            </div>
        </div>
    );
}

export default App;
