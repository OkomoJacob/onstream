import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been liked: ${isLiked}`);
  }, [isLiked, title]);

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} {count || null}
      </h2>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avator" />
    </div>
  );
};

export default App;
