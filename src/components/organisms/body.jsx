import React from 'react';
import { Benifits, Card, FurtherDetails, GetInTouch, Main, Technologies, WhyUs} from '../molecules';



function Body(){
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

export default Body;