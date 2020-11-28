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
            href="https://www.linkedin.com/in/annadepablopuig/"
            target="_blank"
          >
            Anna de Pablo Puig
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/annadpp/react_final_project"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
