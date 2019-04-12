import React, { Component } from "react";
import RaceList from "../RaceList/RaceList";
import RaceForm from "../RaceForm";
import { race } from "rxjs";

const racesDashboard = [
  {
    id: "1",
    title: "Tour de France",
    date: "2018-03-27T11:00:00+00:00",
    category: "race",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Paris, France",
    location: "Eiffel Tower",
    postedBy: "Bob",
    photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    racers: [
      {
        id: "a",
        name: "Joe",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Tour de Something Else",
    date: "2018-03-27T11:00:00+00:00",
    category: "race",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Boulder, CO",
    location: "Eiffel Tower",
    postedBy: "Mark",
    photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    racers: [
      {
        id: "a",
        name: "Susan",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Timothy",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class RaceDashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <RaceList races={racesDashboard} />
          </div>
          <div className="col-5">
            <RaceForm />
          </div>
        </div>
      </div>
    );
  }
}

export default RaceDashboard;
