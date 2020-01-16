import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./style/Tag.scss";

function Tag() {
  const [tags, setTags] = React.useState([]);
  return (
    <ReactTagInput
      placeholder="Tapez et appuyez sur entrée pour ajouter un tag"
      tags={tags}
      editable={true}
      validator={value => {
        // Don't actually validate e-mails this way
        const isEmail = value.indexOf(" ") !== 1;
        if (!isEmail) {
          alert("Please enter an e-mail address");
        }
        // Return boolean to indicate validity
        return isEmail;
      }}
      onChange={newTags => setTags(newTags)}
    />
  );
}

export default Tag;
