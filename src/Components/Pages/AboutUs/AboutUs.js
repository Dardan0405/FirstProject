import React from "react";
import Carousel from "react-elastic-carousel"
import { TopCategoriesDatas } from "./data";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const BreakPoints = [
 
        { width: 190, itemsToShow: 1 },
        // { width: 150, itemsToShow: 2 },
        // { width: 250, itemsToShow: 4 },
        {width: 200, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
    
        { width: 1200, itemsToShow: 5 }, // Change itemsToShow to 3 at 1200px width
        { width: 1100, itemsToShow: 6 }, // Adjust other breakpoints as needed
]
const TopCategories =() =>{
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem
        ) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo('single-slide'.length);
        }
    };
    return(
        <div className='Top-Categories'>
            <div className='TopCategories-Title'>
              </div>
              <Carousel className="slider styled-arrows" 
                breakPoints={BreakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
            {TopCategoriesDatas.map((props) =>{
              return(
            <div className="Cards-topcategoties">
                    <div className="Icon-Container-Top">
                    <div className="Icon-Top" style={{content: `url(${props.icon})`}}></div>
                    <div className="border-top"  style={{content: `url(${props.color})`}}></div>
                    </div>
                   <Link to={props.to} className="Ttile-Top">
                    <div className="Ttile-Container-Top">{props.title}</div>
                   </Link>
                   <div className="bllock-TopCategories">
                    <div className="Pargraph-Container-top">{props.paragraph}</div>
                   </div>
                   
              
        
            
                </div>
                
              
            
              )
            })}
              </Carousel>
          
              
            
        </div>
    )
}
export default TopCategories