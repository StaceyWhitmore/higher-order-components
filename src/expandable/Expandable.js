/*
* Takes a composed Component, wraps it with
* state and functionality for showing or hiding content
*/
import React, {Component} from 'react'

const Expandable = ComposedComponent =>
 class Expandable extends Component {
  constructor(props) {
    super(props)
    const collapsed = (props.hidden && props.hidden === true) ?
        true :
        false
    this.state = {
      collapsed
    }
    this.expandCollapse = this.expandCollapse.bind(this)
  }//close constructor()

  /*
  expandCollapse() {
    let collapsed = !this.state.collapsed
    this.setState({collapsed})
  }
  */
  expandCollapse(prevState) {
    this.setState( prevState => (
      {
        collapsed: !prevState.collapsed
      })
    )
  }

  render() {
    return <ComposedComponent
              expandCollapse={this.expandCollapse}
                              {...this.state}
                              {...this.props} />
  }
}//close Component()

export default Expandable
