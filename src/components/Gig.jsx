const Gig = (props) => {
  return (
    <div className="card image-full p-1">
      <figure>
        <img className="_band-image" src={props.bandImage} />
      </figure>

      <div className="card-body">
        <div className="stats bg-black/30">
          <div className="stat">
            <div className="stat-title font-medium"><p className="badge badge-accent">{props.bandName}</p></div>
            <div className="stat-value text-xl _event-location">
              <div className="badge badge-accent">{props.eventDescription}</div>
            </div>
          </div>
        </div>

        <div className="stats bg-black/30">
          <div className="stat">
            <div className="stat-title font-medium"><div className="badge badge-accent">Where</div></div>
            <div className="stat-value text-xl _event-location">
              <div className="badge badge-accent">{props.eventLocation}</div>
            </div>
          </div>
        </div>

        <div className="stats bg-black/30">
          <div className="stat">
            <div className="stat-title font-medium"><div className="badge badge-accent">When</div></div>
            <div className="stat-value text-xl _event-date-and-time">
              <div className="badge badge-accent">{props.eventDateAndTime}</div>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-lg btn-accent">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
