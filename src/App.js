import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tampere" />
        <footer>
          This project was coded by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/annadepablopuig/"
          >
            Anna de Pablo Puig
          </a>{" "}
          and is{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/annadpp/react_final_project"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
