// Grabbing react from node_modules
import React from 'react'

// All of your UI centered code goes INSIDE of the createClass
export default React.createClass({
  getInitialState() {
    return {
      outputCalculation: "0"
    }
  },
  onClearButtonClick() {
    this.setState({
      outputCalculation: "0"
    })
  },
  onClickNumber(e) {
    this.refs.outputCalculation.classList = "output output--red"
    // Concat number that was clicked to existing number
    var currentNumber = this.state.outputCalculation;
    var clickedNumber = e.target.textContent;

    this.setState({
      outputCalculation: currentNumber + clickedNumber
    })
  },
  render() {
    // Inside of the <h1> using this.state is called BINDING
    return (
      <section>
        <button className="clearButton" ref="outputClear" onClick={ this.onClearButtonClick }>c</button>
        <h1 className="output" ref="outputCalculation"> { this.state.outputCalculation } </h1>
        <button onClick={ this.onClickNumber }> 0 </button>
        <button onClick={ this.onClickNumber }> 1 </button>
        <button onClick={ this.onClickNumber }> 2 </button>
        <button onClick={ this.onClickNumber }> 3 </button>
        <button onClick={ this.onClickNumber }> 4 </button>
        <button onClick={ this.onClickNumber }> 5 </button>
        <button onClick={ this.onClickNumber }> 6 </button>
        <button onClick={ this.onClickNumber }> 7 </button>
        <button onClick={ this.onClickNumber }> 8 </button>
        <button onClick={ this.onClickNumber }> 9 </button>
      </section>
    )
  }
})
