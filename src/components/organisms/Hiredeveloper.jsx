import React from 'react';
import { Benifits, BannerBlock, Card, FurtherDetails, GetInTouch, Main, Technologies, WhyUs, Blog} from '../molecules';



function Body(props){
    return(
        <div>
          <Main /> 
         {/* <BannerBlock /> */}
          <Benifits />
          <Technologies /> 
          <WhyUs />
          <FurtherDetails />
          <Card />
           <GetInTouch /> 
           
        </div>
    )
}

Body.defaultProps = {
};

export default Body;