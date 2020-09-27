import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./imageAlbum.css";

export default function ImageAlbum(props) {
  let imageFolderPath = "/";
  let imagePaths = [];
  for (let i = 1; i <= props.numberOfImages; i++) {
    imagePaths.push(imageFolderPath + props.imagePrefix + "-" + i + ".jpg");
  }

  let imageAlbum = (
    <div className="imageAlbum" onContextMenu={(e) => e.preventDefault()} >
      <Carousel
        controls={true}
        interval={null}
        nextIcon={<span className="w-50" />}
        prevIcon={<span className="w-50" />}
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
