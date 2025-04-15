![image](https://github.com/user-attachments/assets/b8087176-f935-42a2-a734-053e789f3688)# 📰 NewsIndia Web App

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
```
The app will automatically switch to the second key if the first one is rate-limited.

📦 Installation
1. Clone the repository:
```
git clone https://github.com/yourusername/newsindia.git
cd newsindia
```
2. Install dependencies:
```
npm install
```
3. Run the app:
```
npm start
```
📸 Screenshots

Top Health Headlines:
![image](https://github.com/user-attachments/assets/c216648c-0e4b-465a-9acc-b0fcb9f4114b)

Search Query:
![image](https://github.com/user-attachments/assets/4aa46cba-3218-46bb-bcc7-94a8bcc5b23a)

No News Found Regarding The Query:
![image](https://github.com/user-attachments/assets/eeb2177b-c6ac-4692-9e42-561b2b6af9ee)

About News:
![image](https://github.com/user-attachments/assets/dafe5b9c-523d-4d6c-800a-a80c0fa5ec9d)


🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

📄 License

This project is licensed under the MIT License.

Stay informed with NewsIndia – your daily dose of fresh news!
---

Let me know if you want me to generate the file itself or customize it for deployment (e.g., with GitHub Pages setup).
