import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(
  React.createElement(App), //Composite Component- component you and i have created.
  document.getElementById("root")
);
