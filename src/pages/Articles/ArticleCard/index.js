import { Link, useRouteMatch } from 'react-router-dom'
import LightPanel from '../../../components/LightPanel'
import './articleCard.css'

function ArticleCard() {
    let { url } = useRouteMatch()
    return (
        <LightPanel addedClasses='articles-articleCard'>
            <img className='articleCard-img' src={'https://picsum.photos/400/300'} alt='' />
            <h2>Article Title</h2>
            <div className='articleCard-textContainer'>
                <p className='articleCard-text dropFont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius eros vitae diam egestas sagittis. Cras ultricies volutpat lacus nec consectetur. Donec sit amet feugiat odio. Proin eu nisl quis ipsum dapibus venenatis ultricies id lorem. Donec dolor magna, elementum et magna id, iaculis dapibus nunc. Proin massa mi, iaculis sed fringilla eu, sagittis id tortor. Donec efficitur vehicula posuere. Curabitur commodo metus quis risus commodo egestas. Pellentesque nec dui nec lorem tincidunt mattis. Aliquam id eleifend diam, nec dignissim ligula.</p>
            </div>
            <Link to={`${url}/helloworld`}>Read More</Link>
        </LightPanel>
    )
}

export default ArticleCard