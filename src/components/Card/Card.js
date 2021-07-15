import React from "react";
import {Link} from "react-router-dom"
import './Card.css'


const Card = ({avatar, name, exp, id}) => {
  return (
    
      <div className="container-pokemon">
        <img src={avatar} alt={name} />
        <Link to={`/characteristic/${id}/`}>{name.charAt(0).toUpperCase() + name.slice(1)} </Link>
        <p>Experiencia: {exp}</p>
      </div>

  );
};

export default Card;
