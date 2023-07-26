export function Carousel() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          id="carouselExampleRide"
          className="carousel slide  "
          data-bs-ride="true"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <img
                src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider2.jpg"
                className="d-block "
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <img
                src="http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider4.jpg"
                className="d-block "
                alt="..."
              />
            </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
}
