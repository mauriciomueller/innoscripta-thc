export function combineNews(...newsLists: any[]): { news: any[], sourceCounts: Record<string, number> } {
  const combinedNews = newsLists
    .filter(news => news !== null)
    .flat()
    .filter(article => {
      const content = `${article.title} ${article.description || ""}`;
      return !content.includes("[Removed]");
    });

  const shuffledNews = combinedNews.sort(() => Math.random() - 0.5);

  const sourceCounts = shuffledNews.reduce((counts: Record<string, number>, article: any) => {
    const source = article.source || 'Unknown';
    counts[source] = (counts[source] || 0) + 1;
    return counts;
  }, {});

  return { news: shuffledNews, sourceCounts };
}