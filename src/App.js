import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import MovieView from './components/MovieView';
import NoFound from './components/NoFound';
// import SearchViewSubmitView from './components/SearchViewSubmitView';
// import {Switch} from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {

      console.log(searchText, 'is the search tesxt')

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=02b8338f8bf30c8faf7bf3a431f2c3a2&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
    }

  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NoFound />} />
      </Routes>

    </div>
  );
}

export default App;
