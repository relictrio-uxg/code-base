import React from 'react';
import { Benifits, Card, FurtherDetails, GetInTouch, Main, Technologies, WhyUs} from '../molecules';



function Body(props){
    return(
        <div>
          <Main />
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