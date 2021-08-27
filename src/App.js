import { useState } from "react";
import "./styles.css";

var movieGenre = {
  DRAMA: [
    { name: "The Shawshank Redemption (1994)", rating: "9.3/10" },
    { name: " Forrest Gump (1994)", rating: "8.7/10" },
    { name: "Schindler's List (1993)", rating: "8.9/10" },
    { name: "Soorarai Pottru (2020)", rating: "9.1/10" }
  ],
  ACTION: [
    { name: "The Dark Knight (2008)", rating: "9.0/10" },
    { name: "The Matrix (1999)", rating: "8.7/10" },
    { name: "Vikram Vedha (2017)", rating: "8.4/10" },
    { name: "Avengers Endgame(2019)", rating: "8.4/10" }
  ],
  HORROR: [
    { name: "Saw (2004)", rating: "7.6/10" },
    { name: " The Exorcist (1973)", rating: "8/10" },
    { name: "Drag Me to Hell (2009)", rating: "6.5/10" }
  ]
};

export default function App() {
  var movieGenreList = Object.keys(movieGenre);

  var [userInput, setUserInput] = useState("ACTION");

  function generateList(genre) {
    setUserInput(genre);
  }

  return (
    <div className="App">
      <h1>🎬Movie Suggestion App</h1>
      <p>Check out the amazing movies based on genres</p>

      <h3>
        {movieGenreList.map((genre) => {
          return (
            <button onClick={() => generateList(genre)} key={genre}>
              {genre}
            </button>
          );
        })}
      </h3>
      <hr></hr>
      <ul>
        {movieGenre[userInput].map((g) => {
          return (
            <div className="output-div" key={g.name}>
              <section className="movieProfile">
                <div className="movie">
                  <h3> Name: {g.name}</h3>
                  <p> Rating: {g.rating}</p>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
