import Lottie from "../components/lottie";
import Home from "./home";
import Services from "./services";
import AboutUs from "./about";
import Examples from "./examples";
import Comments from "./comments";
import Footer from "../components/footer";
function Template() {
    return (
        <div className="bg-white">
            <div className="overflow-hidden">
                <div className="mx-auto max-w-screen-2xl">
                    <Home />
                    <Services />
                    <AboutUs />
                    <Examples />
                    <Comments />
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Template;
