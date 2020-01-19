import React, {Component} from "react";

class Favourite extends React.Component {
  render() {
    return (
      <div className="person__fav">
        <span className="person__fav__icon ">
          <svg width="20" height="20">
            <polygon points="10,0 4,20 20,8 0,8 16,20" className={this.props.fav ? 'fav' : ''} />
          </svg>
        </span>
      </div>
    )
  }
}

export default Favourite;