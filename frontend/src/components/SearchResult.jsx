import React from "react";
import "./style/SearchResults.scss";
import { useHistory } from "react-router-dom";
import { Image, CloudinaryContext } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SearchResult() {
  const searchResults = useSelector(state => state.searchResults);
  const history = useHistory();

  return (
    <div className="containerComponent">
      <div className="results">
        Voici les résultats
        {searchResults.length > 0 ? (
          searchResults.map(result => (
            <Link to={`/userpage/${result.id}`}>
              <div className="userContainer">
                <div className="imgSection">
                  {result.user_avatar ? (
                    <CloudinaryContext cloudName="lanur">
                      <Image publicId={result.user_avatar} className="avatar" />
                    </CloudinaryContext>
                  ) : (
                    <img src="noob.jpg" className="avatar" />
                  )}
                </div>
                <div className="infoSection">
                  <div className="infoResult">Pseudo: {result.pseudo}</div>
                  {result.team_id ? <div>{result.team_id}</div> : null}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Pas de résultats</div>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
