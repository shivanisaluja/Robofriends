import React from "react";
import './Card.css';
const Card = ({id,name,email}) => {
return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
        <img className="photo" alt = "ph" src={`https://robohash.org/${id}`}></img>
        <div>
        <h2>{name}</h2>
        <p>
          {email}
        </p>
    </div>
    </div>
)
}

export default Card;