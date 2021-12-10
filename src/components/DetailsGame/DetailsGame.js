import { useState, useEffect } from "react";
import { getGameById } from "../../services/gameService";
import DetailsCard from "./DetailsCard";

const DetailsGame = ({ id }) => {
  const [game, setGame] = useState({});

  useEffect(() => {
    getGameById(id).then((data) => setGame(data));
  }, []);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <DetailsCard key={game._id} game={game} />
    </section>
  );
};

export default DetailsGame;