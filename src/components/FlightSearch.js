import React from "react";
import { FLIGHT_DATA, CITIES } from "./data";
import "./styles.css";

class FlightSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      isReturn: false,
      showList: true,
      cities: CITIES,
      return: "",
      depart: "",
      from: "",
      to: "",
      fromCode: "",
      toCode: ""
    };
  }

  handleReturnTrip = flag => {
    this.setState({
      isReturn: flag
    });

    if (!flag) {
      this.setState({
        return: ""
      });
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

    if (event.target.name === "from") {
      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index];
      var option = optionElement.getAttribute("data-from");

      this.setState({
        fromCode: option
      });
    } else if (event.target.name === "to") {
      var index = event.target.selectedIndex;
      var optionElement = event.target.childNodes[index];
      var option = optionElement.getAttribute("data-to");

      this.setState({
        toCode: option
      });
    }
  };
  render() {
    const isReturn = this.state.isReturn;
    const cities = this.state.cities;
    return (
      <div className="App">
        <div>
          <div className="infobox">
            <h1> Search flights for best deals!!! </h1>
            <h2>MyFlightTrip</h2>
            <br />
            <br />
            <div className="container">
              <form onSubmit={this.handleSubmit} action="/list">
                <div className="row">
                  <label
                    onClick={() => this.handleReturnTrip(false)}
                    className={isReturn === true ? "badge" : "badge active"}
                  >
                    One Way
                  </label>
                  <label
                    onClick={() => this.handleReturnTrip(true)}
                    className={isReturn ? "active badge" : "badge"}
                  >
                    Round Trip
                  </label>
                </div>
                <div className="row">
                  <div className="col-100">
                    <select name="from" required onChange={this.handleChange}>
                      <option value="">From</option>
                      {Object.keys(CITIES).map((city, index) => (
                        <option
                          data-from={city}
                          key={index}
                          value={CITIES[city]}
                        >
                          {CITIES[city] + " (" + city + ")"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-100">
                    <select name="to" required onChange={this.handleChange}>
                      <option value="">To</option>
                      {Object.keys(CITIES).map((city, index) => (
                        <option data-to={city} key={index} value={CITIES[city]}>
                          {CITIES[city] + " (" + city + ")"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-100">
                    <input
                      onChange={this.handleChange}
                      required
                      type="date"
                      name="depart"
                      placeholder="Depart"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-100">
                    <input
                      onChange={this.handleChange}
                      disabled={!this.state.isReturn ? true : false}
                      required
                      type="date"
                      name="return"
                      placeholder="Return"
                      value={this.state.return}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-100">
                    <input type="submit" value="Search" />
                  </div>
                </div>
                <input
                  type="hidden"
                  name="fromCode"
                  value={this.state.fromCode}
                />
                <input type="hidden" name="toCode" value={this.state.toCode} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlightSearch;
