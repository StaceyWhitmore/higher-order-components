/*
This file has been saved for reference only
and should be deleted prior to production build.
*/
import React, { Component } from 'react'
import { render } from 'react-dom'
import fetch from 'isomorphic-fetch'//npm install isomorphic-fetch --save

class PeopleList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loaded:false,
      loading:false
    }
  }//close constructor()

  componentWillMount() {
  this.setState({loading:true})
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(obj => obj.results)
      .then(data => this.setState({
        loading:true,
        loading:false,
        data
      }))
  }//componentWillMount()

  render() {
  const { data, loading, loaded } = this.setState
  return (loading) ?
    <div>Loading...</div> :
      <ol className="people-list">
        {
            data.map((person, i) => {
              const {first,last} =person.name
              return <li key={i}>{first} {last}</li>
            })
        }
      </ol>
  }//close render()
}//close <PeopleList/>

export default PeopleList
