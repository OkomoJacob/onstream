import React, { useState, useEffect } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      // Incase of Success.
      const data = await response.json();
      console.log("Got Movies ==>:", data);
      
      // Incase of Error
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMsg("Error fetching movies. Please try again later.");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll enjoy
            without the Hassle.
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2>All Movies</h2>
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        </section>
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
