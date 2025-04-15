export default async function handler(req, res) {
    const { category, country, page, pageSize, q } = req.query;
  
    const apiKeys = [
        import.meta.env.VITE_NEWS_API_1,
        import.meta.env.VITE_NEWS_API_2,
    ];
  
    const tryFetch = async (key) => {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${q || ""}&apiKey=${key}&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      if (response.status === 429) throw new Error("Rate limited");
      return await response.json();
    };
  
    try {
      let data;
      try {
        data = await tryFetch(apiKeys[0]);
      } catch {
        data = await tryFetch(apiKeys[1]);
      }
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
  