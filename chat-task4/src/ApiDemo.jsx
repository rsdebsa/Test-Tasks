import { useEffect, useState } from "react";

export default function ApiDemo() {
  const [posts, setPosts] = useState([]);
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
      .then((data) => {
        setPosts(data.slice(0, 5)); // فقط ۵ آیتم
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
    <div>
      <h3>لیست پست‌ها</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "8px" }}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
