export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  const { category, country, searchTerm, q,  page, pageSize, apiKey } = req.query;
  const actualSearchTerm = searchTerm || q;

  const params = new URLSearchParams();
  if (country) params.append("country", country);
  if (category) params.append("category", category);
  if (actualSearchTerm) params.append("q", actualSearchTerm);
  if (page) params.append("page", page);
  if (pageSize) params.append("pageSize", pageSize);
  if (apiKey) params.append("apiKey", apiKey);

  const url = `https://newsapi.org/v2/top-headlines?${params.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal server error" });
  }
}
