import { Carousel } from "flowbite-react";
import { image4, image5, image6, image7 } from "../assets/images";


export const Component = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={image6} alt="..." />
        <img src={image5} alt="..." />
        <img src={image4} alt="..." />
        <img src={image7} alt="..." />
      </Carousel>
    </div>
  );
}