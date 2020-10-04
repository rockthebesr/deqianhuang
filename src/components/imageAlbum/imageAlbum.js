import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./imageAlbum.css";
import { getImageDir } from "../../util/util";

export default class ImageAlbum extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    let elements = document.getElementsByClassName("carousel-item active");

    do {
      if (!!elements[0]) {
        elements[0].classList.remove("active");
      }
    } while (elements.length > 0);
    elements = document.getElementsByClassName("carousel-item");
    elements[0].classList.add("active");
  }

  render() {
    let imagePaths = [];
    for (let i = 1; i <= this.props.numberOfImages; i++) {
      imagePaths.push(
        getImageDir() + this.props.imagePrefix + "-" + i + ".jpg"
      );
    }

    let imageAlbum = (
      <div className="imageAlbum" onContextMenu={(e) => e.preventDefault()}>
        <Carousel
          controls={true}
          interval={null}
          nextIcon={<span className="w-90" />}
          prevIcon={<span className="w-10" />}
          slide={false}
          indicators={false}
        >
          {imagePaths.map((image) => (
            <Carousel.Item>
              <img
                className="d-block w-100 img-responsive"
                src={image}
                alt="info"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );

    return imageAlbum;
  }
}
