import React, { useState } from "react";
import LazyLoad from "react-lazy-load";
import ImageSpinner from "./ImageSpinner";

const LazyLoadImage = (props) => {
  let [loading, setLoading] = useState(true);
  return (
    <div>
      <LazyLoad>
        <img
          loading="lazy"
          className="item-img"
          {...props}
          onLoad={() => setLoading(false)}
        />
      </LazyLoad>
      <div className="lazy-image-wrapper">{loading && <ImageSpinner />}</div>
    </div>
  );
};

export default LazyLoadImage;
