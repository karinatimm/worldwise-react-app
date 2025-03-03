let cities = [];

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Return cities
    res.status(200).json(cities);
  } else if (req.method === "POST") {
    const newCity = req.body;
    newCity.id = cities.length + 1;
    cities.push(newCity);
    res.status(201).json(newCity);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    cities = cities.filter((city) => city.id !== Number(id));
    res.status(204).end();
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
