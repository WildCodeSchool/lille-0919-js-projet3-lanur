import React from "react";
import "./style/IdForm.scss";
import { Link } from "react-router-dom";

class IdForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: "",
      firstname: "",
      age: "",
      gender: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      age: this.state.age,
      gender: this.state.gender
    };
  };

  render() {
    return (
      <container className="formContainer">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="inputContainer">
            <label className="label">Nom</label>
            <input
              className="idInput"
              type="text"
              value={this.state.lastname}
              onChange={event => {
                this.setState({ lastname: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Prénom</label>
            <input
              className="idInput"
              type="text"
              value={this.state.firstname}
              onChange={event => {
                this.setState({ firstname: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Age</label>
            <input
              className="idInput"
              type="text"
              value={this.state.age}
              onChange={event => {
                this.setState({ age: event.target.value });
              }}
            />
          </div>
          <div className="inputContainer">
            <label className="label">Sexe</label>
            <select
              className="idSelect"
              type="text"
              value={this.state.gender}
              onChange={event => {
                this.setState({ gender: event.target.value });
              }}
            >
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>
          </div>
        </form>
        <div>
          <button className="button" onClick={this.previous}>
            Précédent
          </button>
          <Link to="signIn2">
            <button className="button" onClick={this.next}>
              Suivant
            </button>
          </Link>
        </div>
      </container>
    );
  }
}

export default IdForm1;
