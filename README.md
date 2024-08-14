# News Aggregator Project

## Description
This project is a news aggregator that collects news from different sources and displays them in a feed or allows searching by keyword, start date, end date, category, and source. It is built using modern web technologies and is containerized with Docker to ensure consistency across different environments.

## Features
- **Display News Feed**: Aggregate and display news from multiple sources.
- **Feed Preferences**: Customize your news feed by selecting sources, authors, and categories.
- **Search Functionality**: Search for news articles using keywords, date range, category, and source.

## Technologies
- **Frontend**: Next.js
- **Containerization**: Docker, Docker Compose
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API Integration**: Various news APIs (e.g., NewsAPI, The Guardian, New York Times)

## Requirements
Before you begin, ensure you have the following installed on your system:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)
- **Git**: [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## Installation
### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/news-aggregator.git
cd news-aggregator
```

### 2. Copy the environment variables file:
```bash
cp .env.example .env.local
```
### 3. Fill in the environment variables:
Open the .env.local file and fill in the necessary environment variables. These typically include API keys for the news sources, database connection strings, and other configuration details.
```plaintext
`NEXT_PUBLIC_NEWS_API_KEY`: Your NewsAPI key
`NEXT_PUBLIC_GUARDIAN_API_KEY`: Your The Guardian API key
`NEXT_PUBLIC_NYT_API_KEY`: Your New York Times API key
```

### 4. Build the Docker containers:
```bash
docker-compose up
```

### 5. Access the application:
Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the news aggregator application.


## API endpoints
The news aggregator application provides the following API endpoints:

- **GET /api/new-york-times/article-search**: Search for articles from the New York Times.
- **GET /api/news-api/top-headlines**: Get top headlines from NewsAPI.
- **GET /api/news-api/everything**: Get all articles from NewsAPI.
- **GET /api/the-guardian/search**: Search for articles from The Guardian.