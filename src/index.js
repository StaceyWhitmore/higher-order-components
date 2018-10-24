import React from 'react'
import {render} from 'react-dom'

//for use with <DataComponent/>
import RandomMeUsers from './data-component/random-me-users/RandomMeUsers'
//import CountryDropDown from './country-drop-down/CountryDropDown'
   /*
   render(
     <CountryDropDown selected="United States" />,
     document.getElementById('root')
   )
   */

   render(
     <RandomMeUsers />,
     document.getElementById('root')
   )
