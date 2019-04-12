import React, { Component } from 'react'

class RaceListRacer extends Component {
  render() {
    const {racer} = this.props;
    return (
      <div>
        <img src={racer.photoURL} alt="Random Thumbnail" className="img-thumbnail"></img>
      </div>
    )
  }
}

export default RaceListRacer;
