import React, { Component } from "react";

class SortProp extends React.Component {
  render() {
    return (
      <label className={"controlPanel__sortModule__props__" + this.props.propName}>
        <input 
          onClick={this.props.click ? this.props.click.bind(this): () => {}}
          ref={node => this._button = node}
          type="radio"
          name="sortBy"
          value={this.props.propName}
        />
        <span> {this.props.propName} </span>
      </label>
    )
  }
}

export default SortProp;