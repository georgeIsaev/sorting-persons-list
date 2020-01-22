import React, { Component } from "react";
import ReactDOM from "react-dom";
import SortModule from './modules/SortModule';
import ViewModule from './modules/ViewModule';

class ControlPanel extends React.Component {
  render() {
    return (
      <div className="controlPanel">
        <SortModule inputClick={this.inputClick} sortProp={['id', 'name', 'age']} sortOrder={['asc', 'desc']} />
        <ViewModule inputClick={this.inputClick} viewTypes={['table', 'preview']} />
      </div>
    )
  }

  componentDidMount() {
    if (localStorage.getItem('oldURL')) {
      history.pushState(null, null, localStorage.getItem('oldURL'));
      const oldURL = new URL(window.location.toString());

      const activeBtns = [
        document.querySelector(`input[name="sortBy"][value="${oldURL.searchParams.get('sortBy')}"]`),
        document.querySelector(`input[name="orderBy"][value="${oldURL.searchParams.get('orderBy')}"]`),
        document.querySelector(`input[name="view"][value="${oldURL.searchParams.get('view')}"]`),
      ];
      activeBtns.forEach(btn => btn.setAttribute('checked', true));
    } else {
      const newURL = new URL(window.location.toString());

      const activeBtns = [
        document.querySelector('input[name="sortBy"][value="id"]'),
        document.querySelector('input[name="orderBy"][value="asc"]'),
        document.querySelector('input[name="view"][value="table"]'),
      ];

      activeBtns.forEach(btn => {
        btn.setAttribute('checked', true);
        newURL.searchParams.set(btn.name, btn.value);
      });

      history.pushState(null, null, newURL);
    }
  }

  inputClick(e) {
    const button = ReactDOM.findDOMNode(this._button);
    const thisURL = new URL(window.location.toString());
    
    thisURL.searchParams.set(button.name, button.value);
    history.pushState(null, null, thisURL);
    localStorage.setItem('oldURL', thisURL);
    console.log(thisURL);
    // this.save(callback);
  }
}

export default ControlPanel;