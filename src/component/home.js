
import React from 'react';
import "../App.css"
import AppHero from './hero';
import AppAbout from './about';
import AppFeature from './feature';
import AppWorks from './works';
import AppFaq from './faq';
import AppPricing from './pricing';
import AppContact from './contact';

function AppHome(){
    return(
       
       <div>
        <AppHero/>
        <AppAbout/>
        <AppFeature/>
        <AppWorks/>
        <AppFaq/>
        <AppPricing/>
        <AppContact/>
        
       </div>    
    )
}
export default AppHome;
