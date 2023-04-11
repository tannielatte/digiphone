import Carousel from "react-bootstrap/Carousel";
import banner_1 from "../../assets/banner-1.png";
import banner_2 from "../../assets/banner-2.png";
import banner_3 from "../../assets/banner-3.png";

export default function Banner() {
  return (
    <div className="container-lg py-5">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
