import React, { Component } from "react";
//rcc
class ComponentTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickNumber: 0,
        };
    }
    // Khai báo hàm xử lý khi nhấn nút senData
    handleSendData = () => {
        // console.log("Click Send Data");
        // Khai báo ra 1 dữ liệu bất kỳ;
        // let dataTop = "This is data from Top";
        // let { onHandleSendData } = this.props;
        // onHandleSendData(dataTop);
        this.setState({
            clickNumber: this.state.clickNumber + 1,
        });
    };
    render() {
        let xP = this.props.x;
        let { x, y, headingTop } = this.props;

        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3 className="panel-title">{headingTop}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-9">
                                    <input className="form-control"></input>
                                </div>
                                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={this.handleSendData}
                                    >
                                        Send Data
                                    </button>
                                    <h3>{this.state.clickNumber} Lần</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentTop;
