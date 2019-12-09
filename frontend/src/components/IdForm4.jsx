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
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputContainer">
            <label className="labelTextarea">Rôles</label>
            <textarea
              className="idTextarea"
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
              Précédent
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
