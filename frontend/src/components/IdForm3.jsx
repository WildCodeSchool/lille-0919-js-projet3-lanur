import React from "react";
import "./style/IdForm.scss";
import { Link } from "react-router-dom";

class IdForm3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pays: "",
      city: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      pays: this.state.pays,
      city: this.state.city
    };
  };

  render() {
    return (
      <container className="formContainer">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputContainer">
            <label className="label">Pays</label>
            <input
              className="idInput"
              type="text"
              value={this.state.pays}
              onChange={event => {
                this.setState({ pays: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Ville</label>
            <input
              className="idInput"
              type="text"
              value={this.state.city}
              onChange={event => {
                this.setState({ city: event.target.value });
              }}
            />
          </div>
        </form>
        <div>
          <Link to="signIn2">
            <button className="button" onClick={this.previous}>
              Précédent
            </button>
          </Link>
          <Link to="signIn4">
            <button className="button" onClick={this.next}>
              Suivant
            </button>
          </Link>
        </div>
      </container>
    );
  }
}

export default IdForm3;
