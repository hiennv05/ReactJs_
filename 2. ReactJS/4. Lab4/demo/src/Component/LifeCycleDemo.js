import React, { Component } from "react";
import Demo from "./Demo";
//rcc
class LifeCycleDemo extends Component {
    // Hàm constructor
    constructor(props) {
        console.log("Constructor is running!");
        super(props);
        this.state = {
            msg: "Hello ",
            killer: "true",
        };
    }

    handleClick = () => {
        this.setState({
            msg: "Hello 11",
        });
    };

    handleClick2 = () => {
        this.setState({
            killer: !this.state.killer,
        });
    };

    //Hàm render()
    render() {
        console.log("Hàm render is running!");
        return (
            <div>
                <h3>{this.state.msg}</h3>
                <button
                    type="button"
                    className="btn btn-large btn-info"
                    onClick={this.handleClick}
                >
                    Change State
                </button>
                <button
                    type="button"
                    class="btn btn-danger"
                    onClick={this.handleClick2}
                >
                    Killer
                </button>

                {this.state.killer&& <Demo/>}
            </div>
        );
    }

    componentDidMount() {
        console.log("Component Did mount running!");
        // Call API
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("PrevProps ", prevProps);
        console.log("PreState ", prevState);
        console.log("Component Did update running!");
    }

    // componentWillUnmount() {
    //     console.log("Component Will un mount");
    // }
}

export default LifeCycleDemo;
