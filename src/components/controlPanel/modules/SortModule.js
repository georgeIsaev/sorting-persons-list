import React, { Component } from "react";
import SortProp from "./elements/SortProp";
import SortOrder from "./elements/SortOrder";

class SortModule extends React.Component {
  render() {
    return (
      <div className="controlPanel__sortModule">
        <h4 className="controlPanel__sortModule__title"> Sort by </h4>
        <div className="controlPanel__sortModule__props">
          <SortProp click={this.props.inputClick} propName={this.props.sortProp[0]} />
          <SortProp click={this.props.inputClick} propName={this.props.sortProp[1]} />
          <SortProp click={this.props.inputClick} propName={this.props.sortProp[2]} />
        </div>
        <div className="controlPanel__sortModule__order">
          <SortOrder click={this.props.inputClick} orderName={this.props.sortOrder[0]} />
          <SortOrder click={this.props.inputClick} orderName={this.props.sortOrder[1]} />
        </div>
      </div>
    )
  }
}

export default SortModule;