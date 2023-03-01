import React, { useState } from "react";
import FilmYear from "../components/FilmYear";
import FilmInfo from "../components/FilmInfo";
import { data } from "../helper/data";

const Main = () => {
  const [dataNew, setDataNew] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="d-block d-sm-block d-lg-flex justify-content-evenly align-items-center my-div">
      <FilmYear
        dataNew={dataNew}
        setDataNew={setDataNew}
        show={show}
        setShow={setShow}
        data={data}
      />
      {show && <FilmInfo dataNew={dataNew} show={show} setShow={setShow} />}
    </div>
  );
};

export default Main;
