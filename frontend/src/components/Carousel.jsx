import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import React from "react";
import "./style/Carousel.scss";

export default function Carousel() {
  const content = [
    {
      title: "John C.",
      role: " Pro-Player",
      description:
        "Lorem ipsum fezokfoefpokm  ofkslkfpkpefkp kskkdpoazd kpoagta fdytfdgd_y èfdygyfuèe",
      image:
        "http://www.influencia.net/data/classes/actualite/actu_6082_image2012rectangle_petite.png"
    },
    {
      title: "Harry D.",
      role: "Coach",
      description:
        "Lorem ipsum fzeopzfkpzk efpoekfefzftydyazftydaf auzdyfazytdfuyqfz dyufqzfdyu",
      image:
        "http://getwallpapers.com/wallpaper/full/2/0/2/764295-black-purple-background-3200x1800-for-meizu.jpg"
    },
    {
      title: "Samuel N.",
      role: "Player",
      description:
        "lorem ipsum tgee zerfz fz fzjn e o z zefzrf z z egfzgef grfed grfedz tgfrde tgrfde gtrf",
      image:
        "http://getwallpapers.com/wallpaper/full/2/0/2/764295-black-purple-background-3200x1800-for-meizu.jpg"
    }
  ];
  return (
    <Slider className="slider">
      {content.map((item, index) => (
        <div
          key={index}
          style={{
            background: `url('${item.image}') no-repeat center`,
            backgroundSize: "cover"
          }}
        >
          <div className="center">
            <div className="content">
              <h1>{item.title}</h1>
              <h2>{item.role}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
