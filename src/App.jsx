import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  componentDidMount() {
    if (window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }

  handleSearch = (term) => {
    this.setState({ searchTerm: term });
  };

  handleNavigation = (path) => {
    localStorage.setItem("lastPath", path);
  };

  pageSize = 12;
  apikeys = [import.meta.env.VITE_NEWS_API_1, import.meta.env.VITE_NEWS_API_2];

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <NavBar onSearch={this.handleSearch} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="general"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="business"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="entertainment"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="health"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="science"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="sports"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apikeys={this.apikeys}
                  setProgress={this.setProgress}
                  key="technology"
                  searchTerm={this.state.searchTerm}
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
