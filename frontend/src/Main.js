import { useEffect, useState } from 'react';
import Games from './Games';
import './App.css';

function Main({ query }) {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('myFavGames')) || []);

  useEffect(() => {
    const prefetchData = fetch('http://localhost:12345/games.json');
    const dataFetch = async () => {
      const data = await (await prefetchData).clone().json();
      setData(data.games);
    };
    if (data.length) {
      return;
    } else {
      dataFetch();
    }
  }, []);

  function handleGameCardClick(event) {
    const fav = data.map((game) => (game.short === event.currentTarget.id ? (game.tags === 'favourite' ? { ...game, tags: '' } : { ...game, tags: 'favourite' }) : game));
    setData(fav);
    localStorage.setItem('myFavGames', JSON.stringify(fav));
  }

  if (!data) return <p>loading</p>;

  return (
    <main className="cards">
      <ul>
        <Games data={data} addFav={handleGameCardClick} query={query} />
      </ul>
    </main>
  );
}

export default Main;
