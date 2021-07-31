import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button type="button" className="btn btn-outline-primary">
          Left
        </button>
        <button type="button" className="btn btn-outline-primary">
          Middle
        </button>
        <button type="button" className="btn btn-outline-primary">
          Right
        </button>
      </div>
    </div>
  );
}

export default App;
