import React, { Component } from "react";

class ViewType extends React.Component {
  render() {
    return (
      <label className={"controlPanel__viewModule__types__" + this.props.viewType}>
        <input type="radio" name="view" value={this.props.viewType} />
        <span> {this.props.viewType} </span>
      </label>
    )
  }
}

export default ViewType;