import billieEilish from "../assets/Billie-Eilish.jpg";
import theKillers from "../assets/The-Killers.jpg";
import snoopDogg from "../assets/Snoop-Dogg.jpg";
import Gig from "./Gig.jsx";

const Carousel = (props) => {
    return (
        <>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item relative w-full">
            <Gig
              bandImage={billieEilish}
              bandName="Billie Eilish"
              eventDescription="BILLIE EILISH: HIT ME HARD AND SOFT: THE TOUR"
              eventLocation="London - The O2"
              eventDateAndTime="Fri, 11 Jul 2025 - 17:30"
            />
          </div>

          <div id="item2" className="carousel-item relative w-full">
            <Gig
              bandImage={theKillers}
              bandName="The Killers"
              eventDescription="Rebel Diamonds Tour"
              eventLocation="London - The O2"
              eventDateAndTime="Sat, 4 Jul 2024 - 19:00"
            />
          </div>

          <div id="item3" className="carousel-item relative w-full">
            <Gig
              bandImage={snoopDogg}
              bandName="Snoop Dogg"
              eventDescription="Help A Homie Out: Semi-Final Tour"
              eventLocation="London - OVO Arena, Wembley"
              eventDateAndTime="Mon, 1 Apr 2026 - 00:00"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </>
    );
  };

  export default Carousel;
