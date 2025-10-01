// Importiere die News aus der JSON-Datei
import newsData from '../data/news.json';
import { NewsArticle } from '../types/news';

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function NewsSection() {
  const articles: NewsArticle[] = newsData;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Aktuelle Real Madrid News</h2>
      <div className="grid gap-6">
        {articles.map((article, index) => (
          <article key={index} className="border-b pb-4 last:border-b-0">
            <h3 className="font-semibold text-lg mb-2">
              <a href={article.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-600 transition-colors">
                {article.title}
              </a>
            </h3>
            <p className="text-gray-600 mb-2">{article.description}</p>
            <div className="text-sm text-gray-500">
              <span>{article.source.name}</span>
              <span className="mx-2">•</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}