import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.js'

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return(
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this move is rated {movieRating} stars</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terriable", "Bad", "Good", "Great", "Amazing"]}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
