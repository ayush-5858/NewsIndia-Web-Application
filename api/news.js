export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  const { category, country, searchTerm, page, pageSize, apiKey } = req.query;

  const params = new URLSearchParams();
  if (country) params.append("country", country);
  if (category) params.append("category", category);
  if (searchTerm) params.append("q", searchTerm); // Only append if non-empty
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
