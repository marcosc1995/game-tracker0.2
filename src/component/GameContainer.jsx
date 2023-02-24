import React, { useState, useEffect } from "react";
import "../styleSheet/GameContainer.css";
import GameCard from "./GameCard";

function GameContainer() {
  const [games, setGames] = useState([]);
  const apiGet = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "6150e4d77bmsh04abafa6114ef03p1ce7e0jsncc8a1386169e",
      },
    };
    fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games?key=f62da0af1d41486894d3adad81cbd732`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setGames(json.results);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
  return (
    <div className="gameContainer">
      {games.map((game) => (
        <GameCard key={game.id} title={game.name} img={game.background_image} ></GameCard>
      ))}
    </div>
  );
}

export default GameContainer;
