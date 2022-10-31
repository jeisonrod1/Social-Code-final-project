import restaurantTestImage from "../../../images/restaurants/card-4.jpg"
import {ReactComponent as Star} from "../../../images/icons/svgs/star.svg"
import Map from "../../../images/other/map.png"
import React, { useState } from 'react';
import {HeaderComponent, BackgroundImage, Overlay, Information, Flex, StarWrapper} from "./RestaurantHeader.styles"

const RestaurantHeader = () => {
    
    const [rating, setRating] = useState();
    const [star1, setStar1] = useState();
    const [star2, setStar2] = useState();
    const [star3, setStar3] = useState();
    const [star4, setStar4] = useState();
    const [star5, setStar5] = useState();

    
    const fillStars = (rating) => {
        if (rating == 1) {
            setStar1 = "#F8E71C"
        }
        else if (rating == 2) {
            setStar1 = "#F8E71C"
            setStar2 = "#F8E71C"
        }
        else if (rating == 3) {
            setStar1 = "#F8E71C"
            setStar2 = "#F8E71C"
            setStar3 = "#F8E71C"
        }
        else if (rating == 4) {
            setStar1 = "#F8E71C"
            setStar2 = "#F8E71C"
            setStar3 = "#F8E71C"
            setStar4 = "#F8E71C"
        }
        else if (rating == 5) {
            setStar1 = "#F8E71C"
            setStar2 = "#F8E71C"
            setStar3 = "#F8E71C"
            setStar4 = "#F8E71C"
            setStar5 = "#F8E71C"
        }
        }
        fillStars(rating)
/*         setRating = 1; */

return (
  <HeaderComponent>
        <BackgroundImage src={restaurantTestImage} alt="Restaurant Image"/>
        <Overlay/>
        <Information>
            <div>Restaurant Name</div>
            <div className="restaurant-type">Type</div>
            
            <Flex>
                <StarWrapper>
                    <Star className="star" fill={star1} stroke="none"/>
                    <Star className="star" fill={star2} stroke="none"/>
                    <Star className="star" fill={star3} stroke="none"/>
                    <Star className="star" fill={star4} stroke="none"/>
                    <Star className="star" fill={star5} stroke="none"/>
                </StarWrapper>
                <span className="review-number">0</span>
                <span className="review">reviews</span>
            </Flex>
        </Information>

  </HeaderComponent>
);

};
export default RestaurantHeader;