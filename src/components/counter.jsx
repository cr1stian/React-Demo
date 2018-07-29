import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    //This is where the magic happens for displaying content // LINE 22: call class function to decide colors/classes to use and rendering the current value
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgesClasses() {
    //Created a function to render classes dynamically(the color of the button) depending on the current value; AMAZING
    let classes = "badge m-2 badge-"; //First we set a base for the class used in bootstrap using 'let' because it will change unlike const(can not change)
    classes += this.props.counter.value === 0 ? "warning" : "primary"; //In normal tongue; Add this string: if value is 0 then 'warning' if not then 'primary'
    return classes; //Return the Class for current value
  }

  formatvalue() {
    const { value } = this.props.counter; //Picking the value property of the object to no longer have to type this.state.value on bottom line
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
