import React from "react";
import ReactDOM from "react-dom/client";
import ComDidMount from "./ComDidMount"

class Header extends React.Component{
    constructor(props){
            super(props);
            this.state = {favoritecolor: "red"};
        }
        componentDidMount(){
            setTimeout(() =>{
                this.setState({favoritecolor: "yellow"})
            },1000)
        }
        render(){
            return(
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Header />);

    export default ComDidMount;