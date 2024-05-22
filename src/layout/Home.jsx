import About from "./About";
import Banner from "./Banner";
import Events from "./Events";
import Gallery from "./Gallery";
import HoverAnimation from "./HoverAnimation";
import Price from "./Price";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <HoverAnimation></HoverAnimation>
            <About></About>
            <Gallery></Gallery>
            <Price></Price>
            <Review></Review>
        </div>
    );
};

export default Home;