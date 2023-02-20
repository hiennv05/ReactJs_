import { React, useState, useEffect } from "react";
export default function DemoHook() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };

    const [count2, setCount2] = useState(0);
    const handleClick2 = () => {
        setCount2(count2 + 1);
    };

    // Component did mount + Component did update (Chỉ đc gọi khi count hoặc count2 thay đổi)
    useEffect(() => {
        console.log("Code 1");
    }, [count, count2]);

    // Component did mount + Component did update (Chỉ đc gọi khi count 2 thay đổi)
    useEffect(() => {
        console.log("Code 2");
    }, [count2]);

    // Component did mount
    useEffect(() => {
        console.log("Code 3");
        console.log("Component Did mount");
    }, []);

    // Component will unmount
    useEffect(() => {
        return () => {
            console.log("Code 4");
        };
    });

    return (
        <div className="container">
            <button
                type="button"
                className="btn btn-danger"
                onClick={handleClick}
            >
                button
            </button>
            <p>Bạn vừa click {count} lần</p>
            <hr />
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick2}
            >
                button2
            </button>
            <p>Bạn vừa click {count2} lần</p>
        </div>
    );
}
