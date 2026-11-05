import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import Marquee from "./Marquee";
import FeaturedTiles from "./FeaturedTiles";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </div>
  );
};

export default HomePage;
