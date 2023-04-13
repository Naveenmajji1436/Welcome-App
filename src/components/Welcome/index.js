import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  SubscribedButton = () =>
    this.setState(oldText => ({
      buttonText:
        oldText.buttonText === 'Subscribe' ? 'Subscribed' : 'Subscribe',
    }))

  render() {
    const {buttonText} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button
          className="button"
          onClick={this.SubscribedButton}
          type="button"
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
