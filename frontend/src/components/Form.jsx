import React from "react";
import "./style/IdForm.scss";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        lastname: "",
        firstname: "",
        age: "",
        gender: "",
        pseudo: "",
        email: "",
        password: "",
        country: "",
        city: "",
        role: "",
        lan: "",
        events: ""
      },
      page: 1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      ...this.state.user
    };
  };

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <container className="formContainer">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          {/* LastName -------------------------------------------------------------------------------------------- */}
          {this.state.page === 1 ? (
            <div className="page1">
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
              {/* FirstName -------------------------------------------------------------------------------------------- */}

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
              {/* Age -------------------------------------------------------------------------------------------- */}

              <div className="inputContainer">
                <label className="label">Date of birth</label>
                <input
                  className="idInput"
                  type="date"
                  value={this.state.age}
                  onChange={event => {
                    this.setState({ age: event.target.value });
                  }}
                />
              </div>
              {/* Sexe -------------------------------------------------------------------------------------------- */}

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
            </div>
          ) : (
            ""
          )}
          {this.state.page === 2 ? (
            <div className="page2">
              <div>
                {/* Pseudo -------------------------------------------------------------------------------------------- */}

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

                {/* email -------------------------------------------------------------------------------------------- */}

                <div className="inputContainer">
                  <label className="label">E-mail</label>
                  <input
                    className="idInput"
                    type="email"
                    value={this.state.email}
                    onChange={event => {
                      this.setState({ email: event.target.value });
                    }}
                  />
                </div>
                {/* Password -------------------------------------------------------------------------------------------- */}

                <div className="inputContainer">
                  <label className="label">Password</label>
                  <input
                    className="idInput"
                    type="password"
                    value={this.state.password}
                    onChange={event => {
                      this.setState({ password: event.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.page === 3 ? (
            <div className="page3">
              {/* Country -------------------------------------------------------------------------------------------- */}

              <div className="inputContainer">
                <label className="label">Pays</label>
                <input
                  className="idInput"
                  type="text"
                  value={this.state.country}
                  onChange={event => {
                    this.setState({ country: event.target.value });
                  }}
                />
              </div>

              {/* City -------------------------------------------------------------------------------------------- */}

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
            </div>
          ) : (
            ""
          )}
          {/* Role -------------------------------------------------------------------------------------------- */}
          {this.state.page === 4 ? (
            <div className="page4">
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

              {/* Lan -------------------------------------------------------------------------------------------- */}

              <div className="inputContainer">
                <label className="label">LAN</label>
                <input
                  className="idInput"
                  type="text"
                  value={this.state.lan}
                  onChange={event => {
                    this.setState({ lan: event.target.value });
                  }}
                />
              </div>

              {/* Events -------------------------------------------------------------------------------------------- */}

              <div className="inputContainer">
                <label className="label">Events</label>
                <input
                  className="idInput"
                  type="text"
                  value={this.state.events}
                  onChange={event => {
                    this.setState({ events: event.target.value });
                  }}
                />
              </div>
            </div>
          ) : (
            ""
          )}
          {this.state.page != 1 ? (
            <button className="button" onClick={this.previousPage}>
              Précédent
            </button>
          ) : (
            ""
          )}
          {this.state.page != 4 ? (
            <button className="button" onClick={this.nextPage}>
              Suivant
            </button>
          ) : (
            ""
          )}
          {this.state.page === 4 ? (
            <button className="button" type="submit">
              Valider!
            </button>
          ) : (
            ""
          )}
        </form>
      </container>
    );
  }
}

export default Form;
