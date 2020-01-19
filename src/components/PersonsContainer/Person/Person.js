import React, {Component} from "react";
import PersonInfo from './modules/PersonInfo';
import Video from './modules/Video';

class Person extends React.Component {
  render() {
    return (
      <div id={this.props.id} 
        className={`__${this.props.viewClass} person ${this.props.video ? "withVideo" : ''}`}>
        <PersonInfo 
          img={this.props.img}
          name={this.props.name}
          age={this.props.age}
          phone={this.props.phone}
          fav={this.props.fav}
          phrase={this.props.phrase}
        />
        {this.props.video ? <Video src={this.props.video} />: ''}
      </div>
    )
  }
}

export default Person;