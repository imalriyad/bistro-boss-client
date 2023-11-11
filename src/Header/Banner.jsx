import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Carousel >
        <div>
          <img src="https://i.postimg.cc/28Kkn5wF/01.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/N0Mm0Fdh/02.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/DwNRCJJ5/03.png" />
        </div>
        <div>
          <img src="https://i.postimg.cc/wjrkKDky/04.jpg" />
        </div>
        <div>
          <img src="https://i.postimg.cc/2SyxX0nN/05.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
