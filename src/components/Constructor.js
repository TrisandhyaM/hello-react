import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./Constructor";

class Header extends React.Component{
    Constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render(){
        return(
            <h1> My Favorite Color is {this.state.favoritecolor}</h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

export default App;

