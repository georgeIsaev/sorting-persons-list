import React, { Component } from "react";

class ViewType extends React.Component {
  render() {
    return (
      <label className={"controlPanel__viewModule__types__" + this.props.viewType}>
        <input 
          onClick={this.props.click ? this.props.click.bind(this): () => {}}
          ref={node => this._button = node}
          type="radio"
          name="view"
          value={this.props.viewType}
        />
        <span> {this.props.viewType} </span>
      </label>
    )
  }
}

export default ViewType;