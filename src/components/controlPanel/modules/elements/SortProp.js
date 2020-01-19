import React, { Component } from "react";

class SortProp extends React.Component {
  render() {
    return (
      <label className={"controlPanel__sortModule__props__" + this.props.propName}>
        <input type="radio" name="sortBy" value={this.props.propName} />
        <span> {this.props.propName} </span>
      </label>
    )
  }
}

class SortOrder extends React.Component {
  render() {
    return (
      <label className={"controlPanel__sortModule__order__" + this.props.orderName}>
        <input type="radio" name="orderBy" value={this.props.orderName} />
        <span> {this.props.orderName} </span>
      </label>
    )
  }
}

export default SortProp;