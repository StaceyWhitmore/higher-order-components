/*the HOC
SFC style component that returns an
 es6 class style component of the same name
 (DataComponent)
This HOC can be reused to create any type of
data component.
(e.g. a dropdown menu filled with items from and api call)

*/
//import PeopleList as './PeopleList'
import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'//npm install isomorphic-fetch --save


const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends Component {
      constructor(props) {
      super(props)
      this.state = {
        data: [],
        loading:false,
        loaded: false
        }
      }//close constructor()

      componentWillMount() {
          this.setState({loading:true})
            fetch(url)
              .then(response => response.json())
              .then(data => this.setState({
                  loaded:true,
                  loading: false,
                  data
              }))
      }//close componentWillMount()

      render() {
      return (
        <div className="data-component">
        {
          (this.state.loading) ?
            <div>loading...</div> :
            <ComposedComponent {...this.state}
                                {...this.props}/>
          }
        </div>
        )
      }//close render()
  }//close DataComponent class

  export default DataComponent
