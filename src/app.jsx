import React, { Component } from "react";
import Search from "./Components/search";
import User from "./Components/user";
import axios from "axios";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
           userData:[],
           inputData: " "
        }
    }
    async componentDidMount(){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        this.setState({userData: response.data});
    }

    HandleInputData = (event) => {
        this.setState({inputData: event.target.value})
    }
    render(){
        let filterData = this.state.userData.filter(item => item.name.toLocaleLowerCase().includes(this.state.inputData.
        toLocaleLowerCase()));
        console.log(filterData)
        return(
            <div className="container">
                <Search InputData={this.HandleInputData} placeholder="Search user"/>
                <User users={filterData}/>
                
            </div>
        )
    }
}

export default App;