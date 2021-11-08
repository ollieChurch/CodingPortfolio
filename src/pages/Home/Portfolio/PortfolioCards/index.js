import './portfolioCards.css'
import portfolioData from "../portfolioData"
import ProjectCard from './ProjectCard'

function PortfolioCards() {

    return (
        <div className='portfolioCards'>
            {portfolioData.map((project, index) => {
                return <ProjectCard key={index} projectData={project} />
            })}
        </div>
    )
}

export default PortfolioCards