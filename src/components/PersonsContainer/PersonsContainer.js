import React from "react";
import Person from "./Person/Person";

class PersonContainer extends React.Component {
  render() {
    return (
      <div className="personsContainer">
        {this.props.personsData.map(person => {
          return (
            <Person 
              key={person.id}
              id={person.id}
              fav={person.favourite}
              name={person.name}
              age={person.age}
              phone={person.phone}
              img={person.image}
              phrase={person.phrase}
              video={person.video}
              viewClass={this.props.view}
            />
          )
        })}
      </div>
    )
  }
}

export default PersonContainer;