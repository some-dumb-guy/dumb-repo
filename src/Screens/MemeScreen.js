import React from 'react'
import { getMeme } from '../ApiServices/getMeme'
import { NameConsumer } from '../Contexts/NameContext'

class MemePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      memes:[],
      selectedMeme: {},
      loading: false,
    }
  }
  componentDidMount() {
    this.getMemes();
  }
  getMemes = ()=> {
    this.setState({loading: true})
    getMeme().then((response)=>{
      console.log(response);
      const {memes} = response.data;
      this.setState({memes:memes})
      setTimeout(()=>{
        this.setState({loading: false})
      }, 500)
    }).catch(err => console.error(err));
  }
  render() {
    if(this.state.loading){
      return (<div>Loading...</div>)
    }
    return(   <NameConsumer>
      {(props)=> {
        return <div>{"Your name is:"+props.name}</div>
      }}
    </NameConsumer>)
 
  }
}
export default MemePage;