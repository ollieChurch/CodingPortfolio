import { useState } from 'react'
import './portfolioCarousel.css'

import ImageGallery from "./ImageGallery";
import CodeButtons from "../CodeButtons";
import TasterText from "./TasterText";
import TechAndTags from "./TechAndTags";
import LightPanel from "../../../../components/LightPanel";

import portfolioData from "../portfolioData";
import Indicators from './Indicators';

function PortfolioCarousel() {
    const [currentItem, setCurrentItem] = useState(0)
    const numberOfItems = portfolioData.length

    function handleClick(action, btn) {
        btn.blur()

        if (action === 'RIGHT') {
            setCurrentItem(prevItem => {
                return currentItem < numberOfItems - 1 ? prevItem + 1 : 0
            })
        } else if (action === 'LEFT') {
            setCurrentItem(prevItem => {
                return currentItem > 0 ? prevItem - 1 : numberOfItems - 1
            })
        }
    }

    return (
        <div className='portfolio-grid'>
            <div className='portfolio-controls portfolio-controls-left'>
                <button 
                    className='transparentButton'
                    onClick={(e) => handleClick('LEFT', e.target)}
                >
                    This Way! <br />
                <i  className="far fa-hand-point-left"></i>
                </button>
            </div>

            <LightPanel addedClasses='portfolio-item lightPanel-darkSection'>
                <ImageGallery
                    images={portfolioData[currentItem].images}
                    currentItem={currentItem}
                />
                <TasterText 
                    text={portfolioData[currentItem].text}
                    name={portfolioData[currentItem].name}
                />
                <CodeButtons links={portfolioData[currentItem].links}/>
                <TechAndTags tags={portfolioData[currentItem].tags}/>
            </LightPanel>
            
            <Indicators quantity={portfolioData.length} currentItem={currentItem}/>
            <div className='portfolio-controls portfolio-controls-right'>
                <button 
                    className='transparentButton' 
                    onClick={(e) => handleClick('RIGHT', e.target)}
                >
                    That Way!<br />
                    <i className="far fa-hand-point-right"></i>
                </button>
            </div>
        </div>
    )
}

export default PortfolioCarousel