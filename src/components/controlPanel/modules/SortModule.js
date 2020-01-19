import React, { Component } from "react";
import SortProp from "./elements/SortProp";
import SortOrder from "./elements/SortOrder";

class SortModule extends React.Component {
  render() {
    return (
      <div className="controlPanel__sortModule">
        <h4 className="controlPanel__sortModule__title"> Sort by </h4>
        <div className="controlPanel__sortModule__props">
          <SortProp propName={this.props.sortProp[0]} />
          <SortProp propName={this.props.sortProp[1]} />
          <SortProp propName={this.props.sortProp[2]} />
        </div>
        <div className="controlPanel__sortModule__order">
          <SortOrder orderName={this.props.sortOrder[0]} />
          <SortOrder orderName={this.props.sortOrder[1]} />
        </div>
      </div>
    )
  }

  // componentDidMount() {
  //   if (localStorage.getItem('oldURL')) {
  //     history.pushState(null, null, localStorage.getItem('oldURL'));
  //     const oldURL = new URL(window.location.toString());

  //     const activeSortBtn = document.querySelector(`input[name="sortBy"][value="${oldURL.searchParams.get('sortBy')}"]`);
  //     const activeOrderBtn = document.querySelector(`input[name="orderBy"][value="${oldURL.searchParams.get('orderBy')}"]`);
  //     const activeViewBtn = document.querySelector(`input[name="view"][value="${oldURL.searchParams.get('view')}"]`);
  //     activeSortBtn.setAttribute('checked', true);
  //     activeOrderBtn.setAttribute('checked', true);
  //     activeViewBtn.setAttribute('checked', true);
  //   }
  // }
}

export default SortModule;