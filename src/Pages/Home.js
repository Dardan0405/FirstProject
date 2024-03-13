import Navbar from "../Components/Shared/Navbar";
import MobileBar from "../Components/Shared/MobileBar";
import Cards from "../Components/Pages/Home/Cards";



const Home = () =>{
    return(
        <div className="HomePage">
            <Navbar/>
            <MobileBar/>
            <Cards/>
           
            
        </div>
    )
}
export default Home