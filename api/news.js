export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  const { category, country, searchTerm, page, pageSize, apiKey } = req.query;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${searchTerm}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
}
