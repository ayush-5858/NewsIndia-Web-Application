![Screenshot 2025-04-15 133744](https://github.com/user-attachments/assets/4f1254ae-1cc7-4803-a6fb-b3e5cf30b10e)
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
![Screenshot 2025-04-15 134132](https://github.com/user-attachments/assets/b30e8b92-71fe-4807-822d-54a9a32ac092)

Search Query:
![Screenshot 2025-04-15 134245](https://github.com/user-attachments/assets/f5d34361-0d5f-47e3-8618-de7b558b7c36)

No News Found Regarding The Query:
![Screenshot 2025-04-15 134533](https://github.com/user-attachments/assets/b442ba4f-5364-454d-ae0f-999a00476757)

About News:
![Screenshot 2025-04-15 133915](https://github.com/user-attachments/assets/c768a0fd-0f0e-40d3-af51-fae82d179fba)

🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

📄 License

This project is licensed under the MIT License.

Stay informed with NewsIndia – your daily dose of fresh news!
---

Let me know if you want me to generate the file itself or customize it for deployment (e.g., with GitHub Pages setup).
