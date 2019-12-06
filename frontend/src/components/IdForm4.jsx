import React from "react";
import "./style/IdForm.scss";
import { Link } from "react-router-dom";

class IdForm4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      role: this.state.role
    };
  };

  render() {
    return (
      <container className="formContainer">
        <form key={1} className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputContainer">
            <label className="label">Rôles</label>
            <textarea
              className="idInput"
              type="text"
              value={this.state.role}
              onChange={event => {
                this.setState({ role: event.target.value });
              }}
            />
          </div>
        </form>
        <div>
          <Link to="signIn3">
            <button className="button" onClick={this.previous}>
              Prédédent
            </button>
          </Link>
          <Link to="signIn5">
            <button className="button" onClick={this.next}>
              Suivant
            </button>
          </Link>
        </div>
      </container>
    );
  }
}

export default IdForm4;
