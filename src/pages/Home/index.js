import Greeting from './Greeting'
import Portfolio from './Portfolio'
import MoreInfo from './MoreInfo'
import Contact from './Contact'

function Home() {
    return(
        <main className='main-home'>
            <Greeting />
            <Portfolio />
            <MoreInfo />
            <Contact />
        </main>
    )
}

export default Home