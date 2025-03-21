import { useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setIsLiked(true)}>Like</button>
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
