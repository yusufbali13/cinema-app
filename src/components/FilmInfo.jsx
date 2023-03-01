import React from "react";
import StarRatingComponent from "react-star-rating-component";

const FilmInfo = ({ dataNew, SetDataNew, show, setShow }) => {
  return (
    <div className="col-12 col-sm-9">
      {dataNew.map(({ id, img, title, rate, body, date, tags }) => (
        <>
          <div key={id}>
            <img src={img} alt="" className="img" />
            <h3>{title}</h3>
            <span className="texts">{body}</span>
          </div>
          <article className="d-flex align-items-center">
            <div className="d-flex ">
              <span className="text-danger p-1 rounded-3">
                {tags.map((a) => a).join("/")}
              </span>
            </div>
          </article>
          <article className="d-flex align-items-center">
            <div className="d-flex mx-1 align-items-center">
              <div
                className="d-flex pe-1 pe-md-2 pe-lg-4 align-items-center"
                style={{ fontSize: "1.8rem" }}
              >
                <StarRatingComponent
                  name="rate"
                  starCount={5}
                  value={Math.floor(rate / 2)}
                  editing={true}
                />
              </div>
              <div
                className="pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger"
                style={{ fontSize: "1.4rem" }}
              >
                {rate.toFixed(2)}/10
              </div>
            </div>
          </article>
        </>
      ))}
    </div>
  );
};

export default FilmInfo;
