import React, { useEffect, useState } from "react";
import "./style/UserPage.scss";
import { Link } from "react-router-dom";
import { backend } from "../conf.js";
import axios from "axios";

export default function UserPage() {
  const [info, getInfo] = useState();

  const useEffect = () => {
    axios.get(`${backend}/api/users/:id `).then(({ data }) => {
      getInfo(data);
    });
  };

  return (
    <div className="userProfile">
      <h1>Ton profil</h1>
      <div className="profile">
        <div className="avatar">
          <img src="https://via.placeholder.com/200" alt="Image de profil" />
        </div>
        <div className="info">
          <p>Paladinium</p>
          <p>33 ans</p>
          <p>Pro-Player</p>
          <p>GamesUnity Team</p>
          <p>France</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            aspernatur molestias laudantium perferendis vero, aut corporis
            reprehenderit iusto vel atque fuga quos vitae culpa nostrum ea
            molestiae. A, quidem blanditiis?
          </p>
          <Link to="">
            <button>Editer</button>
          </Link>
        </div>
      </div>
      <div className="posts"></div>
    </div>
  );
}
