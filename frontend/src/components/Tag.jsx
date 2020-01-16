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
      maxTags={8}
      validator={value => {
        if (!value.includes(" ")) {
          return value;
        }
        alert("No space allowed in tags");
      }}
      onChange={newTags => setTags(newTags)}
    />
  );
}

export default Tag;
