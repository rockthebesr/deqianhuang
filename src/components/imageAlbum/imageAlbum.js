import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./imageAlbum.css";

export default function ImageAlbum(props) {
  let imageFolderPath = "/" + props.imagePrefix;
  let imagePaths = [];
  for (let i = 1; i <= props.numberOfImages; i++) {
    imagePaths.push(
      imageFolderPath + "/" + props.imagePrefix + "-" + i + ".jpg"
    );
  }

  return (
    <div className="imageAlbum">
      <Carousel
        controls={true}
        interval={null}
        nextIcon={<span className="w-50" />}
        prevIcon={<span className="w-50" />}
        slide={false}
      >
        {imagePaths.map((image) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image}
              alt="info"
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
