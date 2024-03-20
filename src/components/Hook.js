import React ,{ useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./Hook";

function Hook(){
    const [color, setColor] = useState("red");
    return(

        <div>

        <h1>My Favorite Color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        <button type="button" onClick={() =>setColor("red")}>Red</button>
        <button type="button" onClick={() =>setColor("pink")}>Pink</button>
        <button type="button" onClick={() =>setColor("green")}>Green</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hook />);

export default Hook;