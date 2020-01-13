import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import GameChoice from "./GameChoice";
import GameList from "../GameList";
import "./style/IdForm.scss";

function Form() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [registration, setRegistration] = useState({
    pseudo: "",
    email: "",
    password: ""
  });

  const [page, setPage] = useState(1);

  const handleSubmit = () => {
    const newUser = registration;
    axios
      .post("http://localhost:5050/api/auth/signup", newUser)
      .then(response => {
        console.log(response.data);
        dispatch({ type: "SAVE_JWT", value: response.data.token });
        history.push("/newsfeed");
      });
  };

  return (
    <container className="formContainer">
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        {page === 1 ? (
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
        {page === 2 ? (
          <div className="page4">
            <div className="bigGamePage">
              <div className="gamePage">
                {GameList.map(game => {
                  return <GameChoice name={game.name} picture={game.picture} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {page !== 1 ? (
          <button className="button" onClick={() => setPage(page - 1)}>
            Précédent
          </button>
        ) : (
          ""
        )}
        {page !== 2 ? (
          <button className="button" onClick={() => setPage(page + 1)}>
            Suivant
          </button>
        ) : (
          ""
        )}
        {page === 2 ? (
          <button className="button" onClick={handleSubmit}>
            Valider!
          </button>
        ) : (
          ""
        )}
      </form>
    </container>
  );
}

export default Form;
