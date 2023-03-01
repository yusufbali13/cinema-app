function FilmYear({ setDataNew, setShow, show, dataNew, data }) {
  console.log(data);

  const handleClick = (date) => {
    setShow(true);
    setDataNew(data.filter((item) => item.date === date));
  };

  return (
    <div className="col-12 col-lg-1">
      <div
        className="nav nav-pills d-flex align-items-start "
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.date)}
            className={
              item.id === dataNew.id
                ? `activeBtn border-0 px-2 m-2 fs-4 fw-bold text-secondary`
                : ` border-0 px-2 m-2 fs-4 fw-bold text-secondary`
            }
            id="v-pills-home-tab"
            type="button"
            role="tab"
          >
            {item.date}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilmYear;
