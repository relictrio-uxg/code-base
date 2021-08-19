import React from 'react';

import { Body, Footer } from '../organisms';



function HireDeveloper(props){

    console.log('Hire-Developer')
    return(
       <div>
            { !props.preview && <> 
                <Body/>
            </>}
          
           <Footer />
       </div>
       
    )
}

HireDeveloper.defaultProps = {
    selected: false,
  };

export default HireDeveloper;