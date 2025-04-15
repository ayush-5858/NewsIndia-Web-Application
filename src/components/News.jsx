import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import NewsNotFound from "./NewsNotFound";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./Footer";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 15,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    searchTerm: PropTypes.string,
    apikeys: PropTypes.array.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      hasMore: true,
    };
  }

  fetchWithFallback = async (key1, key2, page) => {
    const isVercel = window.location.hostname.includes("vercel.app");
  
    const buildUrl = (key) =>
      isVercel
        ? `/api/news?country=${this.props.country}&category=${this.props.category}&q=${this.props.searchTerm}&page=${page}&pageSize=${this.props.pageSize}&apiKey=${key}`
        : `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.searchTerm}&page=${page}&pageSize=${this.props.pageSize}&apiKey=${key}`;
  
    try {
      const res1 = await fetch(buildUrl(key1));
      if (!res1.ok) {
        const res2 = await fetch(buildUrl(key2));
        if (!res2.ok) return null;
        return await res2.json();
      }
      return await res1.json();
    } catch (error) {
      console.error("Fetch failed:", error);
      return null;
    }
  };
  
  

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async updateNews() {
    this.props.setProgress(10);
    const [key1, key2] = this.props.apikeys;
    this.setState({ loading: true });
    this.props.setProgress(30);

    const parsedData = await this.fetchWithFallback(key1, key2, 1);
    this.props.setProgress(70);

    if (!parsedData || !parsedData.articles) {
      this.setState({ articles: [], loading: false, hasMore: false });
    } else {
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: 1,
        hasMore: parsedData.articles.length > 0,
      });
    }

    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
    this.props.category == "general"
      ? (document.title = "NewsIndia - Get your daily dose of news free!")
      : (document.title = `NewsIndia - ${this.capitalizeFirstLetter(
          this.props.category
        )}`);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({ page: 1 }, () => this.updateNews());
    }
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const [key1, key2] = this.props.apikeys;

    const parsedData = await this.fetchWithFallback(key1, key2, nextPage);
    if (!parsedData || !parsedData.articles) {
      this.setState({ hasMore: false });
      return;
    }

    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      page: nextPage,
      hasMore: parsedData.articles.length > 0,
    }));
  };

  render() {
    return (
      <div className="d-flex flex-column min-vh-100 news-wrapper">
        <div className="flex-grow-1">
          <h1 className="text-center" style={{ marginTop: "65px" }}>
            NewsIndia - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h1>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<Spinner />}
            >
              <div className="container">
                <div className="row">
                  {this.state.articles.length > 0 ? (
                    this.state.articles.map((element) => (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={
                            element.title
                              ? element.title.slice(0, 45)
                              : "Title Not Found"
                          }
                          description={
                            element.description
                              ? element.description.slice(0, 75)
                              : "Description Not Found"
                          }
                          imgUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          dateTime={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    ))
                  ) : (
                    <>
                      <NewsNotFound message={this.props.searchTerm} />
                      <Footer />
                    </>
                  )}
                </div>
              </div>
            </InfiniteScroll>
          )}
          {!this.state.hasMore && this.state.articles.length > 0 && (
            <div className="footer-fixed">
              <Footer />
            </div>
          )}
        </div>
      </div>
    );
  }
}
