import React from "react";
import { ReactDOM } from "react";
import App from "./Netprops";

function Netprops(props){
    console.log(props);
    return(

        <>

        <div className="cards">
        <div className="card">
            <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card_img"/>
            <div className="card_info">
                <span className="card_category"> A Netflix Orignal Series </span>
                <h3 className="card_title"> Dark </h3>
                <a href="https://www.netflix.com/in/title/80990668?source=35">
                    <button> Watch Now </button>
                </a>
            </div>
        </div>
        </div>
    
</>
    )
}
    
//    ReactDOM.render( 
//    <>
   {/* <Netprops /> */}
   {/* </>, */}
    // document.getElementById("root")
// );

export default Netprops;
