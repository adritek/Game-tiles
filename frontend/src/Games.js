import GameCard from './GameCard';

const Games = ({ data, addFav, query }) => {
  return query.length
    ? data
        .filter((game) => game.name.toLowerCase().includes(query))
        .map((matchedGame) => (
          <li key={matchedGame.short}>
            <GameCard addFav={addFav} name={matchedGame.name} short={matchedGame.short} url={matchedGame.url} tags={matchedGame.tags} hasBoosters={matchedGame.hasBoosters} />
          </li>
        ))
    : data.map((game) => (
        <li key={game.short}>
          <GameCard addFav={addFav} name={game.name} short={game.short} url={game.url} tags={game.tags} hasBoosters={game.hasBoosters} />
        </li>
      ));
};
export default Games;
