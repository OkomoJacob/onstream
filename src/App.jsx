import "./App.css";

const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
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
