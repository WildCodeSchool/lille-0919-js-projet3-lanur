import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./style/SignIn.scss";
import Form from "./Form";

const SignIn = () => {
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
  };

  const [divCreation, showDivCreation] = useState(false);

  const accountCreation = () => {
    showDivCreation(!divCreation);
  };
  return (
    <div>
      {!divCreation ? (
        <div className="SignIn">
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
            <form onSubmit={handleSubmit}>
              <h3>Identifiant</h3>
              <input type="text" />
              <h3>Mot de passe</h3>
              <input type="password" />
              <p>mot de passe oublié ?</p>
              <button type="submit" value="Envoyer">
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
        <div className="SignIn">
          <Form />
        </div>
      )}
    </div>
  );
};

export default SignIn;
