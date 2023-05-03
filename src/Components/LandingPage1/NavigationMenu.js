import React, { useRef, Component } from 'react';
import {Link, useOutletContext} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import kgp from '../../assets/images/kgp.png';
import sflogo from '../../assets/images/SF_logo_white.png';
import leftarrow from "../../assets/images/leftarrow.png";
import rightarrow from "../../assets/images/rightarrow.png";
import Mapbar from '../Mapbar/Mapbar';

const NavigationMenu = () => {

    const {landingState, 
        landingSetState, 
        handlePrevClickFunc, 
        handleNextClickFunc,
        handleParticipateClick
    } = useOutletContext()

    function handleCategoryClick() {
        if(landingState.categoryHeading == 'Participate') {
            handleParticipateClick();
        }
        if(landingState.categoryHeading == 'Gallery') {
            this.landingState.audio.pause();
        }
    }

    function godownlanding(){
        var ele = document.getElementById("forsnap-slider2")
        ele.scrollIntoView({
            behavior: "smooth", 
            block: "end", 
            inline: "nearest"
        })
    }
    return ( 
    <>
        <Link to ={`/${landingState.categoryHeading.toLowerCase()}`}  onClick={handleCategoryClick}>
            <div className='lp1-category-icon-overlay'>
            </div>
            <div className="lp1-category-heading" key={landingState.categoryHeading}><div class={landingState.categoryHeadingAnimClass}>{landingState.categoryHeading}</div></div>
        </Link>
        

        <div className={landingState.prevnextbuttonVisibility}>
            <div className='lp1-logos'>
                <a target="_blank" href="http://www.iitkgp.ac.in/"><img className='lp1-logo-image lp1-kgplogo' src={kgp}/></a>
                <Link to = '/'>
                    <img className='lp1-logo-image lp1-sflogo' src={sflogo}/>
                </Link>
            </div>
            <button onClick={handlePrevClickFunc} className="lp1-prev-button">
                <img src={leftarrow} alt="" />
            </button>
            <button onClick={handleNextClickFunc} className="lp1-next-button">
                <img src={rightarrow} alt="" />
            </button>
        </div>
        
        <div className={`${landingState.prevnextbuttonVisibility} lp1-down-arrows`}>
            
            {/* hi */}
            <div class="box" onClick={()=>{godownlanding()}}>
                <span></span>
                <span></span>
            </div>
        </div>

        </>
     );
}
 
export default NavigationMenu;