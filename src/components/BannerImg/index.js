import './bannerImg.css'

function BannerImg( {src='https://picsum.photos/400/300', alt='', position='center'} ) {
    return (
        <img src={src} alt={alt} className={`bannerImg bannerImg-${position}`} />
    )
}

export default BannerImg