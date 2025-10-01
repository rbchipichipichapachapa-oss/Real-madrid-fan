import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

async function fetchNews() {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?' + 
      new URLSearchParams({
        q: 'Real Madrid',
        language: 'de',
        sortBy: 'publishedAt',
        pageSize: '6',
        apiKey: process.env.NEWS_API_KEY || ''
      })
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.statusText}`);
    }

    const data = await response.json();
    const articles = data.articles || [];

    // Formatiere die Artikel für unsere Verwendung
    const formattedArticles = articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name
      }
    }));

    // Speichere die Nachrichten in einer JSON-Datei
    const newsPath = path.join(process.cwd(), 'src/app/data/news.json');
    await fs.mkdir(path.dirname(newsPath), { recursive: true });
    await fs.writeFile(newsPath, JSON.stringify(formattedArticles, null, 2));

    console.log('Successfully updated news data');
  } catch (error) {
    console.error('Error updating news:', error);
    process.exit(1);
  }
}

fetchNews();