import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Form from "./Form";
import "./style/SignIn.scss";
import { backend } from "../conf";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credentialsState, updateCredentialsState] = useState(true);
  const [pseudo, pseudoUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const handleSubmit = () => {
    axios.post(`${backend}/api/auth/login`, { pseudo, password }).then(
      response => {
        dispatch({ type: "SAVE_JWT", value: response.data });
        history.push("/NewsFeed");
      },
      error => {
        updateCredentialsState(false);
      }
    );
  };

  const [divCreation, showDivCreation] = useState(false);

  const accountCreation = () => {
    showDivCreation(!divCreation);
  };

  return !divCreation ? (
    <div className="SignIn" key={"initialSign"}>
      <div className="catchPhrase">
        <h1>
          <span>LAN'</span>U.R
        </h1>
        <h2>
          Vivons l'<span>E-Sport</span> ensemble
        </h2>
      </div>
      <div className="connect">
        <h2>
          <span>Vous avez</span> un compte ?
        </h2>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {!credentialsState && (
            <p className="wrong">
              vos informations semblent fausses, veuillez réesayer
            </p>
          )}
          <h3>Identifiant</h3>
          <input
            type="text"
            value={pseudo}
            onChange={e => {
              updateCredentialsState(true);
              pseudoUpdate(e.target.value);
            }}
            className={credentialsState ? "" : "wrong"}
          />
          <h3>Mot de passe</h3>
          <input
            type="password"
            value={password}
            onChange={e => {
              updateCredentialsState(true);
              passwordUpdate(e.target.value);
            }}
            className={credentialsState ? "" : "wrong"}
          />
          <p>mot de passe oublié ?</p>
          <button type="submit" onClick={handleSubmit}>
            Se connecter
          </button>
        </form>
        <h3>
          Vous n'avez <span>PAS</span> de compte ?
        </h3>
        <div className="noAccount">
          <button onClick={accountCreation} className="accountCreation">
            Créer un compte
          </button>
          <p>Continuer sans créer de compte</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="SignIn" key={"accesForm"}>
      <Form />
    </div>
  );
};

export default SignIn;
