import BannerImg from '../../../../components/BannerImg'
import articleData from './articleData'
import catGameGIF from '../../../../assets/gifs/catGame.gif'
import arduinoImg from '../../../../assets/images/jpg/arduino.jpg'
import disappearingDiamondImg from '../../../../assets/images/jpg/disappearingDiamond.jpg'

function CodingJourney() {
    const {title, img, imgAlt, introText} = articleData.codingjourney

    return (
        <div className='article-content'>
            <BannerImg 
                src={img}
                alt={imgAlt}
                position='center'
            />
            <div className='article-content-textContainer'>
                <h2>{title}</h2>
                <p>{introText}</p>
                <img 
                    src={catGameGIF} 
                    alt="a cartoon cat head moves across the screen avoiding giant mice and picking up power ups" 
                    className='article-img article-img-left'
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
                <img 
                    src={arduinoImg}
                    alt='electronics hooked up to an arduino comuter board' 
                    className='article-img article-img-right'
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
                <img 
                    src={disappearingDiamondImg}
                    alt='an advertising banner for Maxwell Mysteries: The Disappearing Diamond' 
                    className='article-img article-img-left'
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
            </div>
            <BannerImg 
                src={img}
                alt={imgAlt}
                position='bottom'
            />
        </div>
    )
}

export default CodingJourney