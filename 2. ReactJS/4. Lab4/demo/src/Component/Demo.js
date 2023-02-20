import React, { Component } from 'react';

class Demo extends Component {
    render() {
        return (
            <div>
                <p>abc</p>
            </div>
        );
    }
    componentWillUnmount() {
        console.log("Component will unmount");
    }
}

export default Demo;