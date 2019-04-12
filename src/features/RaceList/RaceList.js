import React, { Component } from "react";
import RaceListItem from "./RaceListItem";

class RaceList extends Component {
  render() {
    const {races} = this.props;
    return (
      <div>
        <h3>Race List</h3>
        {races.map((race) => (
            <RaceListItem key={race.id} race={race}/>
        ))}
      </div>
    );
  }
}

export default RaceList;
