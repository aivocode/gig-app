import billieEilish from "../assets/Billie-Eilish.jpg";

const Gig = () => {
  return (
    <div className="card lg:card-side bg-base-100 card-bordered shadow-xl">
      <figure>
        <img className="_band-image" src={billieEilish} />
      </figure>

      <div className="card-body">
        <h2 className="card-title _band-name">Billie Eilish</h2>

        <article className="prose-neutral _event-description">
          <p>BILLIE EILISH: HIT ME HARD AND SOFT: THE TOUR</p>
        </article>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Where</div>
            <div className="stat-value _event-location">London - The O2</div>
          </div>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">When</div>
            <div className="stat-value _event-date-and-time">
              Fri, 11 Jul 2025 - 17:30
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
