import React from "react";
import Navbar from "../Components/Shared/Navbar";
import MobileBar from "../Components/Shared/MobileBar";
import Banner from "../Components/Pages/Blog/Banner";

const BlogPage = () =>{
 return(
    <div className="BlogPage">
        <Navbar/>
        <MobileBar/>
        <Banner/>
    </div>
 )
}
export default BlogPage