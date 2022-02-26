import React from 'react'

class Emplyoee extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
        <div style={{height:"20vh", width: "20vh", marginTop: "2vh"}}>
            Name: {this.props.name}
            <br/>
            Salary: {this.props.salary}
        </div>)
    }
}
export default Emplyoee;