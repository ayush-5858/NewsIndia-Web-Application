import React, { Component } from "react";
import badTime from "../assets/Dog.png";

export default class NewsNotFound extends Component {
  render() {
    return (
      <div className="container my-4 text-center d-flex justify-content-center align-items-center">
        <img src={badTime} alt="" />
        <div className="d-flex flex-column text-start">
          <p className="h3">UH-OH</p>
          <p className="h3">No news found</p>
          <p className="h3">
            Regarding '
            <code>
              {this.props.message && (
                <>
                  {this.props.message.slice(0, 7)}
                  {this.props.message.length > 7 && <span>..</span>}
                </>
              )}
            </code>
            '
          </p>
        </div>
      </div>
    );
  }
}
