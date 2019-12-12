import React from "react";
import "./style/SignIn.scss";

const SignIn = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
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
          <button>Créer un compte</button>
          <p>Continuer sans créer de compte</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;