import React from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = () => {
  return (
    <div className="col-12 col-sm-9">
      <div>
        <h3>Film Name</h3>
        <span className="texts">Film info</span>
      </div>
      <article className="d-flex align-items-center">
        <div className="d-flex ">
          <span className="text-danger p-1 rounded-3">Film Categories</span>
        </div>
      </article>
      <article className="d-flex align-items-center">
        <div className="d-flex mx-1 align-items-center">
          <div
            className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
            style={{ fontSize: "1.8rem" }}>
            <StarRatingComponent
              name="rate"
              starCount={5}
              value={5}
              editing={true}
            />
          </div>
          <div
            className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
            style={{ fontSize: "1.4rem" }}>
              10 / 10
          </div>
        </div>
      </article>
    </div>
  );
};

export default FilmInfo;
