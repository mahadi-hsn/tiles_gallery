import Banner from "@/Components/Home/Banner";
import Booking from "@/Components/Home/Booking";
import ExploreCollections from "@/Components/Home/ExploreCollections";
import NewArrivals from "@/Components/Home/NewArrivals";
import Samples from "@/Components/Home/Samples";
import ShopBySpace from "@/Components/Home/ShopBySpace";

export default function Home() {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Banner></Banner>
      </div>
      <Samples></Samples>
      <div className="w-10/12 mx-auto">
        <ShopBySpace></ShopBySpace>
        <NewArrivals></NewArrivals>
      </div>
      <ExploreCollections></ExploreCollections>
      <div className="w-10/12 mx-auto">
        <Booking></Booking>
      </div>
    </div>
  );
}
