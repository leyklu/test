import React from 'react';
import { FlightForm } from './FlightForm';

export class EditFlight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { id } = this.props.match.params; // Unpacking and retrieve id
    const index = this.props.flightData.findIndex((e) => e.id === parseInt(id));
    const flight = this.props.flightData[index];
    return (
      <FlightForm
        flight={flight}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

  handleChange = (event) => {
    // Implemenation here
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Implementation here
  }
}
