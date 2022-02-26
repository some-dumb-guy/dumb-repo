import React from 'react';
import { Link } from 'react-router-dom';
import Emplyoee from '../Components/Employee'
import { NameConsumer } from '../Contexts/NameContext';

 
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }   
 
    render() {
        return (
        <NameConsumer style={{height: '100vh', width: '100vw'}}>
            {(props)=> {
                return (<div style={{height: '100vh', width: '100vw',display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:"column"}}>{"Your name is:" + props.name}
                <input type="text" value={props.name} onChange={(event)=> {
                    props.setName(event.target.value);
                }}/>
                <Link to="/meme">Go to Meme Page</Link>
                </div>)
            }}

        </NameConsumer>)
    }
}

export default HomeScreen;