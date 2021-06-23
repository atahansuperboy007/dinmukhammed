import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MovieList from "./comp/MovieList";
import MovieInner from "./comp/MovieInner";
import Movie from "./Movie";
import Search from "./comp/Search";
import Form from "./comp/Form";
import Work from "./comp/Work"

import "./style.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <header>
          <Link to="/" className="logo">
            Ez movie
          </Link>
          <div className="links">
            <Link to="/">Фильмы в кино</Link>
            <Link to="/mei">Скоро в кино</Link>
            <Link to="/work">Популярные фильмы</Link>

          </div>
          <div className="search">
            <Form />
          </div>
        </header>

        <Switch>
          <Route path="/mei">
            <MovieInner />
          </Route>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/search/:q">
            <Search />
          </Route>

          <Route path="/work">
          <Work/>
          </Route>
        </Switch>
        <footer>
        ® Created by Dinmukhammed
        <div className="container">
          <a href="https://www.instagram.com/dimash.ez/"><i class="fab fa-instagram"></i></a>
          <a href="https://vk.com/yvnkxx3"><i class="fab fa-vk"></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><i class="far fa-envelope"></i></a>
        </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
