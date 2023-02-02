import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import MyFavourites from './MyFavourites';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import GameView from './GameView';

function App() {
  const [query, setQuery] = useState('');
  return (
    <Router>
      <Header setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Main query={query} />}></Route>
        <Route
          path="/my-favourites"
          element={
            <main className="cards">
              <ul>
                <MyFavourites query={query} />
              </ul>
            </main>
          }
        ></Route>
        <Route path="/my-favourites/:id" element={<GameView />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
