import React, { Component } from "react";
import loading from "../assets/loading.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={loading} alt="Loading" />
      </div>
    );
  }
}
