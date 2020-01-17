import React from "react";
import ReactDOM from "react-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./style/Tag.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Tag() {
  const [tags, setTags] = React.useState([]);
  const notify = () => toast("Ne pas utiliser d'espace dans les tags.");
  return (
    <div className="tag">
      <ReactTagInput
        placeholder="Tapez et appuyez sur entrée pour ajouter un tag"
        tags={tags}
        maxTags={8}
        validator={value => {
          if (!value.includes(" ")) {
            return value;
          }
          return notify() && null;
        }}
        onChange={newTags => setTags(newTags)}
      />
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        autoClose={5000}
        enableMultiContainer={false}
      />
    </div>
  );
}

export default Tag;
