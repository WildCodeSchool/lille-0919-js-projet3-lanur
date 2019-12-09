import React from "react";
import "./style/IdForm.scss";
import { Link } from "react-router-dom";

class IdForm5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lan: "",
      events: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      lan: this.state.lan,
      events: this.state.events
    };
  };

  render() {
    return (
      <container className="formContainer">
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
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
        </form>
        <div>
          <Link to="signIn4">
            <button className="button" onClick={this.previous}>
              Précédent
            </button>
          </Link>
          <button className="button" onClick={this.next}>
            Suivant
          </button>
        </div>
      </container>
    );
  }
}

export default IdForm5;
