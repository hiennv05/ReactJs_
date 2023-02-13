import "./App.css";
import React from "react";
function App() {
    // let divStyle = {color: "red", backgroundColor: "blue"}
    // style={divStyle}
    // const _onClick = () => {
    //     alert("abc");
    // }
    return (
        <div className="App">
            <h1>Hello World</h1>
            <button
                type="button"
                onClick={() => {
                    alert("abc");
                }}
            >
                Click Me!
                b
            </button>
        </div>
        // React.createElement("div",{style: {color: "red"}}, React.createElement("h1", null, "Hello World"))
    );
}
export default App;
