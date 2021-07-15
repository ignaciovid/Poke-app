import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import DetailsPokemon from "./components/DetailsPokemon/DetailsPokemon";

function App() {
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState("");

  const getPokemons = async () => {
    axios.get(url)
    .then((info) => {
      info.data.results.forEach((item) => {
        axios.get(item.url)
          .then((info) => {
            let pokemon = {
              id: info.data.id,
              name: info.data.name,
              img: info.data.sprites.front_default,
              exp: info.data.base_experience,
            };
            setPokemons((pokemons) => [...pokemons, pokemon]);
            setId(info.data.id);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  };

  const onFilter = (pokemonId) => {
    let pokId = pokemons.filter((elem) => elem.id === parseInt(pokemonId));
    if (pokId.length > 0) {
      return pokId[0];
    } else {
      return null;
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <SearchBar path="/" />
      <Route
        exact
        path="/"
        render={() => (
          <ul className="container">
            {pokemons.map((el) => (
              <li key={el.id}>
                <Card id={el.id} avatar={el.img} exp={el.exp} name={el.name} />
              </li>
            ))}
          </ul>
        )}
      />
      <Route
        exact
        path={`/characteristic/:pokemonId`}
        render={({ match }) => (
          <DetailsPokemon
            id={id}
            dataPokemon={onFilter(match.params.pokemonId)}
          />
        )}
      />
    </div>
  );
}

export default App;
