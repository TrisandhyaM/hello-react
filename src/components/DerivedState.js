import React from "react";
import ReactDOM from "react-dom/client";
import DerivedState from "./DerivedState";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritcolor: "red"};
    }
    static getDerivedStateFormProps(props, state){
        return {favoritcolor: props.favcol };
    }
    render(){
        return(
            <h1>My Favorite Color is{this.state.favoritcolor}</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="yellow"/>);

export default DerivedState;