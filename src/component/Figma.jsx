import Causes from "./Causes";
import Footer from "./Footer";
import Header from "./Header";
import Image from "./Image";
import Needfund2 from "./Need fund 2";
import Trendingfundrisers from "./Trending-fundrisers";

let Figma = () => {
  return (
    <>
      <div id="main-container-1">
        <div id="main-container-2">
          <Header />
          <Needfund2 />
          <Trendingfundrisers />
          <Causes />
          <Image />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Figma;
