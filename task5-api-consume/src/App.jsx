import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("خطا در دریافت داده");
        }
        return res.json();
      })
      .then((json) => {
        setData(json.slice(0, 5));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h2>Task 5 – API Demo</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            <strong>{item.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
