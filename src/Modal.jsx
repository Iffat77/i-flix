import "./Banner.css";

export default function Modal({ setShowModal, movie }) {
  return (
    <div>
      <div className="modal-back">
        <div className="modal-container">
          <div className="close-container">
            <button onClick={() => setShowModal(false)} className="close-btn">
              x
            </button>
          </div>
          <div className="modal-title">
            <h1>{movie.title}</h1>{" "}
          </div>
          <div className="modal-stars">{movie.stars}</div>
          <div className="modal-plot">{movie.plot}</div>
          <div className="exit-container">
          <button onClick={() => setShowModal(false)} className="exit-btn">
            Exit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
