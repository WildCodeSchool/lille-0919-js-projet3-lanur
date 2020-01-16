import React, { useState, useEffect } from "react";
import "./style/LiveContainer.scss";
import axios from "axios";
import LiveCard from "./LiveCard";

function LiveContainer() {
  const [lives, setLives] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.twitch.tv/helix/streams?first=30&language=en&language=fr`,
        {
          headers: {
            "Client-ID": "nx23qj7nrc53xzxdm1bqhsg3yiqytn"
          }
        }
      )
      .then(({ data }) => {
        setLives(data.data);
      });
  }, []);

  return (
    <div className="allLive">
      <div className="liveTitle">
        <h2> Live</h2>
      </div>
      <div className="liveContent">
        {lives.length > 1
          ? lives.map(live => (
              <LiveCard
                streamer_name={live.user_name}
                stream_title={live.title}
                viewer_count={live.viewer_count}
                user_name={live.user_name}
              />
            ))
          : null}

        {/* <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/YouTube_logo_%282013-2015%29.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/YouTube_logo_%282013-2015%29.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/YouTube_logo_%282013-2015%29.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/YouTube_logo_%282013-2015%29.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c540.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div>
        <div className="streamingStatus">
          <img src="https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg" />
          <img src="https://mlpnk72yciwc.i.optimole.com/w:auto/h:auto/q:auto/https://www.bleedingcool.com/wp-content/uploads/2018/02/Mixer-Logo.png" />
          Online - Name
        </div> */}
      </div>
    </div>
  );
}

export default LiveContainer;
