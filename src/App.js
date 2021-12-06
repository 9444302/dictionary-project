import './App.css';
import Dictionary from "./Dictionary";

import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <Dictionary />
        <footer>
          <a
            href="https://github.com/9444302/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          by Tori
        </footer>
      </div>
    </div>
  );
}

export default App;
