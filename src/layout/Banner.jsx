import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className="">
        <div
         data-aos="flip-up"
         data-aos-easing="ease-in-cubic"
         data-aos-duration="3000"
         className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//ibrahim-boran-m8YjB0noWiY-unsplash.jpg"
            className="h-full w-full object-cover" />
            
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//al-elmes-ULHxWq8reao-unsplash.jpg"
              className="h-full w-full object-cover"/>
           
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg"
             className="h-full w-full object-cover" />
            
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//shardayyy-photography-fJzmPe-a0eU-unsplash.jpg" 
             className="h-full w-full object-cover"/>
            
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//jordan-arnold-Ul07QK2AR-0-unsplash.jpg" 
             className="h-full w-full object-cover"/>
            
        </div>
        <div className="relative w-full max-h-[80vh] overflow-hidden">
            <img src="./asset//mitchell-lawler-tbaoryUol_E-unsplash.jpg" 
             className="h-full w-full object-cover"/>
            
        </div>
    </Carousel>
    );
};

export default Banner;