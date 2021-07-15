import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";
import "./DetailsPokemon.css";

const DetailsPokemon = ({ dataPokemon, id }) => {
  const [stats, setStats] = useState([]);

  const getCaracter = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${dataPokemon.id}/`)
      .then((res) => {
        res.data.stats.map((info) => {
          let AllStats = { id:info.id, name: info.stat.name, value: info.base_stat };
          setStats((oldStats) => [...oldStats, AllStats]);
        });
      });
  };

  useEffect(() => {
    getCaracter();
  }, []);

  return (
    <div className="container-pokemons">
      <img src={dataPokemon.img} alt={dataPokemon.name} />
      <h3 className="title">
        {dataPokemon.name.charAt(0).toUpperCase() + dataPokemon.name.slice(1)}
      </h3>

      {stats.length > 0 ? (
        <ul className="list-group">
          {stats.map((el) => (
            <li className="list-group-item mt-1">
              {el.name.charAt(0).toUpperCase() + el.name.slice(1)}: {el.value}
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
      <div className="icons-container">
        <span
          className="iconify"
          data-icon="cil:medical-cross"
          data-inline="false"
        ></span>
        <span className="iconify" data-icon="mdi-sword" data-inline="false"></span>
        <span
          className="iconify"
          data-icon="fa-solid:shield-alt"
          data-inline="false"
        ></span>
        <span class="iconify" data-icon="twemoji:crossed-swords" data-inline="false"></span>
        <span class="iconify" data-icon="noto-v1:shield" data-inline="false"></span>
        <span
          className="iconspeed iconify"
          data-icon="simple-icons:speedtest"
          data-inline="false"
        ></span>
      </div>
    </div>
  );
};

export default DetailsPokemon;
