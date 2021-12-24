import './bannerImg.css'

function BannerImg( {src='https://source.unsplash.com/random', alt='', position='center'} ) {
    return (
        <img src={src} alt={alt} className={`bannerImg bannerImg-${position}`} />
    )
}

export default BannerImg