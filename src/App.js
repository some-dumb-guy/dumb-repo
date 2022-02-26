import React from 'react'
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import styles from './App.module.css'
import { NameProvider } from './Contexts/NameContext';
import HomeScreen from './Screens/HomeScreen';
import MemeScreen from './Screens/MemeScreen'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }
  setName = (name)  => {
    this.setState({name: name})
  }
  render() {
        return (<Router>
          <NameProvider value={{name: this.state.name, setName: this.setName}}>
          <Routes>
            <Route path="/" element={<HomeScreen/>}></Route>
            <Route path="/meme" element={<MemeScreen/>}></Route>
          </Routes>
          </NameProvider>
        </Router>)
  }
}

export default App;
