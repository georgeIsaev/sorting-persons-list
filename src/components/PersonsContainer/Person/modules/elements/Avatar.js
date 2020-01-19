import React, {Component} from "react";

class Avatar extends React.Component {
  render() {
    return (
      <div className="person__name-avatar">
        <img className="person__name-avatar__avatar" src={"/data/images/" + this.props.imgSrc + ".svg"} alt="avatar" />
        <h3 className="person__name-avatar__name"> {this.props.name} </h3>
      </div>
    )
  }
}

export default Avatar;