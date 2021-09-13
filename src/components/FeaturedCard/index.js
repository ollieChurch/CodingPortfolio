// import { Link, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './featuredCard.css'

function FeaturedCard() {
    // let { url } = useRouteMatch()

    return (
        <div className='articles-featuredCard'>
            <img className='featuredCard-img' src={'https://picsum.photos/200/300'} alt='' />
            <h4 className='featuredCard-title'>Featured Article Title</h4>
            <div className='featuredCard-textContainer'>
                <p className='featuredCard-text dropFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
            </div>
            <Link to={`/articles/featuredarticle`} className='featuredCard-link'>Read More</Link>
        </div>
    )
}

export default FeaturedCard