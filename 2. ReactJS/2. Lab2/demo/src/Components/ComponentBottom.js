import React from "react";

//rsf =>
function ComponentBottom(props) {

    // const handleSendData = () => {
    //     let dataBottom = "demo Data";
    //    props.onHandleSendData(dataBottom);
    // }


    console.log("Bottom props: ", props);
    return (
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">ComponentBottom</h3>
                    </div>
                    <div className="panel-body">
                        <textarea
                            name=""
                            id="input"
                            className="form-control"
                            rows="3"
                            required="required"
                            defaultValue={props.dataFromInput}
                        >
                        </textarea>
                        {/* <button onClick={handleSendData}>Sendata</button> */}
                        {/* <p>{props.dataFromInput}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComponentBottom;
