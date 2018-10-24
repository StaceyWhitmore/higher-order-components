import React, {Component} from 'react'
import HiddenMessage from './HiddenMessage'
//import HiddenMessage from './mouse-over-version/HiddenMessage'
//import HiddenMessage from './WithNo_will-receive-props-version/HiddenMessage'


class HiddenMessages extends Component {
constructor(props) {
super(props)
this.state = {
messages: [
  "Bring your robe and wizard hat",
  "It's going to be an all-afternoon $@# kicking session",
  "yeehaw"
],
showing: -1
}//close this.state
}//close constructor()

render() {
  const {messages, showing} = this.state //so I don't have to append this.state. to the beginning of showing
return(
  <div className="hidden-messages">
    {messages.map((message, i) =>
      <HiddenMessage key={i}
                    hide={(i!==showing)}>
                    {message}
      </HiddenMessage>

    )}
  </div>
    )
  }//close render()
}//close <HiddenMessages/>

export default HiddenMessages
