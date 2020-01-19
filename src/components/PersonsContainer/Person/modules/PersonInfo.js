import React, {Component} from "react";
import Avatar from './elements/Avatar';
import Favourite from './elements/Favourite';

class PersonInfo extends React.Component {
  render() {
    return (
      <div className="person__info">
        <Avatar imgSrc={this.props.img} name={this.props.name}/>

        <div className="person__age">
          <h3 className="person__age__title"> {this.props.age} years </h3>
        </div>
        <div className="person__phone">
          <h3 className="person__phone__title"> {this.props.phone} </h3>
        </div>

        <Favourite fav={this.props.fav}/>

        <div className="person__phrase">
          <p className="person__phrase__text">{this.props.phrase}</p>
        </div>
      </div>
    )
  }
}

export default PersonInfo;