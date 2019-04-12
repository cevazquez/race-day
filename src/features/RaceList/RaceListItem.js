import React, { Component } from "react";
import RaceListRacer from "./RaceListRacer";

class RaceListItem extends Component {
  render() {
    const { race } = this.props;
    return (
      <div className="border mb-4">
        <h3>{race.title}</h3>
        <h4>Posted by {race.postedBy}</h4>
        <h4>{race.date}</h4>
        <p>{race.description}</p>
        <div>
          {race.racers.map(racer => (
            <RaceListRacer key={racer.id} racer={racer} />
          ))}
        </div>
        <button type="button" className="btn btn-info">
          View
        </button>
      </div>
    );
  }
}

export default RaceListItem;
