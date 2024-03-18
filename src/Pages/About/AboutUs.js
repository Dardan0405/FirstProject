import Navbar from "../../Components/Shared/Navbar";
import MobileBar from "../../Components/Shared/MobileBar";
import AboutUs from "../../Components/Pages/AboutUs/AboutUs";
import "./AboutUs.scss"

function AboutUsPage () {
    return(
<div className="AboutUs-Page">
<Navbar/>
<MobileBar/>
<AboutUs/>
</div>
    )
}
export default AboutUsPage