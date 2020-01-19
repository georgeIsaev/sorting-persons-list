import React, { Component } from "react";
import SortModule from './modules/SortModule';
import ViewModule from './modules/ViewModule';

class ControlPanel extends React.Component {
  render() {
    return (
      <div className="controlPanel">
        <SortModule sortProp={['id', 'name', 'age']} sortOrder={['asc', 'desc']} />
        <ViewModule viewTypes={['table', 'preview']} />
      </div>
    )
  }
}

export default ControlPanel;