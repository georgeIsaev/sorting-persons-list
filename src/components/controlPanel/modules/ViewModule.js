import React, { Component } from "react";
import ViewType from "./elements/ViewType";

class ViewModule extends React.Component {
  render() {
    return (
      <div className="controlPanel__viewModule">
        <h4 className="controlPanel__viewModule__title"> View </h4>
        <div className="controlPanel__viewModule__types">
          <ViewType click={this.props.inputClick} viewType={this.props.viewTypes[0]} />
          <ViewType click={this.props.inputClick} viewType={this.props.viewTypes[1]} />
        </div>
      </div>
    )
  }
}

export default ViewModule;