import React, {Component} from 'react'
import HiddenMessages from './hidden-messages/HiddenMessages'
//import PopUpButton from './expandable-menu-button/PopUpButton'

class App extends Component {

  render() {
    return(
      <HiddenMessages />
    )
  }


/*
  render() {
    return(
          <PopUpButton hidden={true} txt="toggle popup">
            <h1>Hidden content here</h1>
            <p> This content will start out as hidden </p>
          </PopUpButton>
         )
  }
  */


}//close class

export default App
