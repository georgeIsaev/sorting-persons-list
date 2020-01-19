import React, { Component } from "react";

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

export default SortOrder;