import React, {Component} from 'react'
//import RandomMeUsers from './random-me-users/RandomMeUsers'
import CountryDropDown from './country-drop-down/CountryDropDown'
class App extends Component {
/*
  render() {
    return(
      <RandomMeUsers count={10} />
    )
  }
  */

  render() {
    return(
      <CountryDropDown selected="United States"/>
    )
  }


}//close class

export default App
