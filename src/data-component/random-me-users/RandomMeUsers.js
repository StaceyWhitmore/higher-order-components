import React from 'react'
import DataComponent from '../DataComponent'

const PeopleList = ({data}) =>
  <ol className="people-list">
      {data.results.map((person, i) => {
          const {first, last} = person.name
          return <li key={i}>{first} {last}</li>
      })}
  </ol>
const RandomMeUsers = DataComponent(
                        PeopleList,
                        "https://randomuser.me/api?results=10"
                      )

export default RandomMeUsers
