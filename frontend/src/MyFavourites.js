import { useState } from 'react';
import GameCard from './GameCard';

const MyFavourites = ({ query }) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('myFavGames')) || []);

  return query.length
    ? data
        .filter((game) => game.name.toLowerCase().includes(query))
        .map((matchedGame) => (
          <li key={matchedGame.short}>
            <a href={matchedGame.short}>
              <GameCard name={matchedGame.name} short={matchedGame.short} url={matchedGame.url} tags={matchedGame.tags} hasBoosters={matchedGame.hasBoosters} />
            </a>
          </li>
        ))
    : data
        .filter((game) => game.tags === 'favourite')
        .map((matchedGame) => (
          <li key={matchedGame.short}>
            <a href={matchedGame.short}>
              <GameCard name={matchedGame.name} short={matchedGame.short} url={matchedGame.url} tags={matchedGame.tags} hasBoosters={matchedGame.hasBoosters} />
            </a>
          </li>
        ));
};
export default MyFavourites;
