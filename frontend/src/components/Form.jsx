import React, { useState } from "react";
import { Link } from "react-router-dom";
import GameChoice from "./GameChoice";
import GameList from "../GameList";
import "./style/IdForm.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function Form() {
  const [registration, setRegistration] = useState({
    lastname: "",
    firstname: "",
    age: "",
    gender: "",
    pseudo: "",
    email: "",
    password: "",
    country: "",
    city: "",
    role: "",
    lan: "",
    events: ""
  });

  const [page, setPage] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = registration;
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="formulaire"
      transitionAppear={true}
      transitionAppearTimeout={1500}
      transitionEnter={true}
      transitionLeave={true}
    >
      <container className="formContainer">
        <form className="form" onSubmit={e => handleSubmit(e)}>
          {/* LastName -------------------------------------------------------------------------------------------- */}
          {page === 1 ? (
            <div className="page1">
              <div className="inputContainer">
                <label className="label">Nom</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.lastname}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      lastname: event.target.value
                    });
                  }}
                />
              </div>
              {/* FirstName -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">Prénom</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.firstname}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      firstname: event.target.value
                    });
                  }}
                />
              </div>
              {/* Age -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">Date of birth</label>
                <input
                  className="idInput"
                  type="date"
                  value={registration.age}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      age: event.target.value
                    });
                  }}
                />
              </div>
              {/* Sexe -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">Sexe</label>
                <select
                  className="idSelect"
                  type="text"
                  value={registration.gender}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      gender: event.target.value
                    });
                  }}
                >
                  <option value="homme">Homme</option>
                  <option value="femme">Femme</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}
          {page === 2 ? (
            <div className="page2">
              <div>
                {/* Pseudo -------------------------------------------------------------------------------------------- */}
                <div className="inputContainer">
                  <label className="label">Pseudo</label>
                  <input
                    className="idInput"
                    type="text"
                    value={registration.pseudo}
                    onChange={event => {
                      setRegistration({
                        ...registration,
                        pseudo: event.target.value
                      });
                    }}
                  />
                </div>
                {/* email -------------------------------------------------------------------------------------------- */}
                <div className="inputContainer">
                  <label className="label">E-mail</label>
                  <input
                    className="idInput"
                    type="email"
                    value={registration.email}
                    onChange={event => {
                      setRegistration({
                        ...registration,
                        email: event.target.value
                      });
                    }}
                  />
                </div>
                {/* Password -------------------------------------------------------------------------------------------- */}
                <div className="inputContainer">
                  <label className="label">Password</label>
                  <input
                    className="idInput"
                    type="password"
                    value={registration.password}
                    onChange={event => {
                      setRegistration({
                        ...registration,
                        password: event.target.value
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {page === 3 ? (
            <div className="page3">
              {/* Country -------------------------------------------------------------------------------------------- */}

              <div className="inputContainer">
                <label className="label">Pays</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.country}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      country: event.target.value
                    });
                  }}
                />
              </div>
              {/* City -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">Ville</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.city}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      city: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Role -------------------------------------------------------------------------------------------- */}
          {page === 4 ? (
            <div className="page4">
              <div className="bigGamePage">
                <div className="gamePage">
                  {GameList.map(game => {
                    return (
                      <GameChoice name={game.name} picture={game.picture} />
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Role -------------------------------------------------------------------------------------------- */}
          {page === 5 ? (
            <div className="page5">
              <div className="inputContainer">
                <label className="labelTextarea">Rôles</label>
                <textarea
                  className="idTextarea"
                  type="text"
                  value={registration.role}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      role: event.target.value
                    });
                  }}
                />
              </div>
              {/* Lan -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">LAN</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.lan}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      lan: event.target.value
                    });
                  }}
                />
              </div>
              {/* Events -------------------------------------------------------------------------------------------- */}
              <div className="inputContainer">
                <label className="label">Events</label>
                <input
                  className="idInput"
                  type="text"
                  value={registration.events}
                  onChange={event => {
                    setRegistration({
                      ...registration,
                      events: event.target.value
                    });
                  }}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="buttonContainer">
            {page != 1 ? (
              <button className="previous" onClick={() => setPage(page - 1)}>
                Précédent
              </button>
            ) : (
              ""
            )}
            {page != 5 ? (
              <button className="next" onClick={() => setPage(page + 1)}>
                Suivant
              </button>
            ) : (
              ""
            )}
            {page === 5 ? (
              <Link to="/NewsFeed">
                <button className="validate" type="submit">
                  Valider!
                </button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </form>
      </container>
    </ReactCSSTransitionGroup>
  );
}

export default Form;
