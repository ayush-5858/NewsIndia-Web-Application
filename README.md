# 📰 NewsIndia Web App

**NewsIndia** is a responsive and dynamic news web application built using **React.js** (class-based components). It fetches the latest headlines from the [News API](https://newsapi.org/) and allows users to browse news by category in real-time.

## 🚀 Features

- 🔄 Real-time news updates
- 🗂️ Category-based filtering (Business, Entertainment, Health, Science, Sports, Technology)
- 🔍 Search functionality to find articles by keywords
- 🌐 Responsive design for desktop, tablet, and mobile
- 🔁 API key fallback system to handle rate limits
- ⏳ Loading spinner while fetching data
- 📄 Pagination for browsing through more articles

## 🛠️ Tech Stack

- **Frontend**: React (Class-based Components)
- **API**: NewsAPI.org
- **Styling**: Bootstrap / Custom CSS
- **Routing**: React Router

## 🔑 API Key Setup

To run this project, you need two API keys from [NewsAPI](https://newsapi.org/). These keys are used with a fallback mechanism to avoid breaking the app due to rate limits.

1. Create a `.env` file in the root directory.
2. Add your API keys like this:

```env
REACT_APP_NEWS_API_KEY1=your_first_api_key
REACT_APP_NEWS_API_KEY2=your_second_api_key

The app will automatically switch to the second key if the first one is rate-limited.