import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, dateTime, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 start-100 badge rounded-pill bg-danger"
            style={{ transform: "translate(-99%, -50%)" }}
          >
            {source.split(" ").slice(0, 3).join(" ")}
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://res.cloudinary.com/pgatour-prod/w_1200,h_628,c_fill,f_auto,q_auto/pgatour/news/editorial/2025/03/17/Rory_trophy1.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ height: "236px" }}
          />
          <div className="card-body" style={{ padding: "10px" }}>
            <h5 className="card-title">
              {title}
              <span className="text-muted">...</span>
            </h5>
            <p className="card-text">
              {description}
              <span className="text-muted">...</span>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Author:{" "}
                <span>
                  <code className="fs-6">
                    {author && author
                      ? author.split(" ").slice(0, 2).join(" ")
                      : "Unknown"}
                  </code>
                </span>
                <br />
                Date & Time:{" "}
                <span className="text-success">
                  {new Date(dateTime).toGMTString()}
                </span>
              </small>
            </p>
            <Link
              to={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary btn-dark text-end"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
