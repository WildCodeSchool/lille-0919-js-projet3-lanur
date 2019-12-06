import React from "react";
import "./style/IdForm.scss";
import { Link } from "react-router-dom";

class IdForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      pseudo: this.state.pseudo,
      email: this.state.email,
      password: this.state.password
    };
  };

  render() {
    return (
      <container className="formContainer">
        <form key={1} className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputContainer">
            <label className="label">Pseudo</label>
            <input
              className="idInput"
              type="text"
              value={this.state.pseudo}
              onChange={event => {
                this.setState({ pseudo: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">E-mail</label>
            <input
              className="idInput"
              type="text"
              value={this.state.email}
              onChange={event => {
                this.setState({ email: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Password</label>
            <input
              className="idInput"
              type="text"
              value={this.state.password}
              onChange={event => {
                this.setState({ password: event.target.value });
              }}
            />
          </div>
        </form>
        <div>
          <Link to="signIn">
            <button className="button" onClick={this.previous}>
              Prédédent
            </button>
          </Link>
          <Link to="signIn3">
            <button className="button" onClick={this.next}>
              Suivant
            </button>
          </Link>
        </div>
      </container>
    );
  }
}

export default IdForm2;
