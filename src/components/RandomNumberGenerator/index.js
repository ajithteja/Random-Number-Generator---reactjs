import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  onRandomNumGenerate = () => {
    const newRandomNum = Math.ceil(Math.random() * 100)
    this.setState({
      randomNum: newRandomNum,
    })
  }

  render() {
    const {randomNum} = this.state

    return (
      <div className="bg-container">
        <div className="cart-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onRandomNumGenerate}
            type="button"
            className="button"
          >
            Generate
          </button>
          <p className="heading number">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
