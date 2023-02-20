import { useState } from "react";

export default function Hello() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment()}>Increment</button>
            </div>
        </div>
    );
}