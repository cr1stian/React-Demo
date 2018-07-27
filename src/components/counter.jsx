import React, { Component } from "react";

class Counter extends Component {
  state = {
    //declaring an object to use as template for data
    value: this.props.counter.value
  };

  handleIncrement = () => {
    //Event handler for click;
    this.setState({ value: this.state.value + 1 }); //you must first set the state so React knows where to look for changes
  }; //As always in React fashion; Curly braces, declare property equal to the date changes

  // renderTags() {
  //   //Function to render tags(or said products)
  //   if (this.state.tags.length === 0) return <p>There are no Tags!</p>; //If array is empty return message

  //   return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>; //Since we are not changing the data we do not need to set the state
  // } //we wrap our return in Unordered List tags then map through the array each rendering in a li tag to show each item

  render() {
    console.log("props", this.props);
    //This is where the magic happens for displaying content // LINE 22: call class function to decide colors/classes to use and rendering the current value
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() =>
            this.handleIncrement()
          } /* LINE 28-29 here we create an event handler for the increment button passing in the data of the button*/
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
    classes += this.state.value === 0 ? "warning" : "primary"; //In normal tongue; Add this string: if value is 0 then 'warning' if not then 'primary'
    return classes; //Return the Class for current value
  }

  formatvalue() {
    const { value } = this.state; //Picking the value property of the object to no longer have to type this.state.value on bottom line
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
