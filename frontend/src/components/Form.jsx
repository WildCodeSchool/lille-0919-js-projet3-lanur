import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import GameChoice from "./GameChoice";
import GameList from "../GameList";
import "./style/IdForm.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { backend } from "../conf.js";

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
      .post(`${backend}/api/auth/signup`, newUser)
      .then(response => {
        dispatch({ type: "SAVE_JWT", value: response.data.token });
        history.push("/newsfeed");
      })
      .catch(err => {
        console.log(err);
      });
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
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {page === 1 ? (
            <div className="page1">
              <div className="introText">
                On a besoin de quelques infos pour démarrer:
              </div>
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
            <div className="page2">
              <div className="introText">
                Choisis les jeux pour lesquels tu souhaites avoir des news
                (penses à scroller):
              </div>
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
    </ReactCSSTransitionGroup>
  );
}

export default Form;
