import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(true);
      }
    } catch {
    //   setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (errorMsg !== null) {
    return <div>Error Occurred! {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading data! Please Wait</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" />
      {images && images.length
        ? images.map((imageItem) => {
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            />;
          })
        : null}
      <BsArrowRightCircleFill className="arrow arroe-right" />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => {
              <button key={index} className="current-indicators"></button>;
            })
          : null}
      </span>
    </div>
  );
}
