import React, {Component} from "react";
import Landing from "./components/pages/Landing"
import "./App.css"

class App extends Component {
    render(){
        return(
            <div className="App">
                <Landing></Landing>
            </div>
        );
    }
}

export default App;