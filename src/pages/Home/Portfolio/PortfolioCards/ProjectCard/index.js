import LightPanel from "../../../../../components/LightPanel"
import CodeButtons from "../../CodeButtons"

function ProjectCard({ projectData }) {
    const {name, images, text, tags, links} = projectData

    function handleClick() {
        console.log('handle click')
        window.open(links.site)
    }

    return (
        <LightPanel addedClasses='projectCard-container'>
                <div className='projectCard-header'>
                    <h3 className='projectCard-title'>{name}</h3>
                    <img className='projectCard-img' src={images[0].src} alt={images[0].alt} onClick={handleClick}/>
                </div>

                <div className='projectCard-textContainer'>
                    {text.map((para, index) => {
                        return <p key={index} className='projectCard-text dropFont'>{para}</p>
                    })}
                </div>
                
                <div className='projectCard-footer'>
                    <CodeButtons links={links} />

                    <div className='projectCard-tagsContainer'>
                        {tags.map((tag, index) => {
                            return <p key={index} className='projectCard-tag'>#{tag.text}</p>
                        })}
                    </div>
                </div>
        </LightPanel>
    )
}

export default ProjectCard