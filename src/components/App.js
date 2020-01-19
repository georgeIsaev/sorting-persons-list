import React from "react";
import ControlPanel from "./controlPanel/ControlPanel";
import PersonContainer from "./PersonsContainer/PersonsContainer";
import data from '../data/data';
// const personsData = getSortPersonsData('id', 'asc');

class App extends React.Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <PersonContainer personsData={data} view="preview" />
      </div>
    )
  }
}

export default App;