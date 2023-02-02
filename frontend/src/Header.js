import { useLocation } from 'react-router-dom';
import Search from './Search';

const Header = ({ setQuery }) => {
  const location = useLocation();

  return (
    <header>
      <div>
        <h1>Game Tiles</h1>
        {location.pathname === '/my-favourites/' ? <a href={'/'}>Back</a> : <a href={`/my-favourites/`}>Your Games</a>}
      </div>
      <Search setQuery={setQuery} />
    </header>
  );
};
export default Header;
