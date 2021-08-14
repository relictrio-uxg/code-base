import React from 'react';
import Benifits from '../molecules/benifits';
import Main from '../molecules/main';
import Technologies from '../molecules/technologies';



function HireDeveloper(){
    console.log('Hire-Developer')
    return(
       <div>
           <Main />
           <Benifits />
           <Technologies />
       </div>
       
    )
}

export default HireDeveloper;