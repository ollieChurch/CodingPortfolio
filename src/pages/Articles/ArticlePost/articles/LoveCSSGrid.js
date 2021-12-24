import ArticleContainer from "../../../../components/ArticleContainer"
import MediaContainer from "../../../../components/MediaContainer"

import css1Img from '../../../../assets/images/jpg/articlePosts/gridCSSAndDisplay1.jpg'
import css2Img from '../../../../assets/images/jpg/articlePosts/gridCSSAndDisplay2.jpg'
import css3Img from '../../../../assets/images/jpg/articlePosts/gridCSS3.jpg'
import css4Img from '../../../../assets/images/jpg/articlePosts/gridCSS4.jpg'
import htmlImg from '../../../../assets/images/jpg/articlePosts/gridHTML.jpg'

function LoveCSSGrid () {
    return (
        <ArticleContainer article='lovecssgrid'>
            <h3 className='article-subtitle'>Getting started</h3>
            <MediaContainer addedClasses='float-media-right'>
                <img 
                    src={htmlImg}
                    alt='html code for setting up CSS Grid'
                    className='article-img'
                />
            </MediaContainer>
            <p>
                Let's take a look at setting up a simple layout using CSS grid. You can find and play with the code laid out in this guide on <a href={'https://codepen.io/olliechurch/pen/WNZZavW'} target='_blank' rel="noreferrer">CodePen</a>. First we need our HTML structure and to declare the grid on the parent using the CSS 'display property'. When you first chasnge the display to grid you will notice very little difference in your layout, everything will still be stacked on top of each other, this is because by default the grid has one column. We are going to change that by introducing the 'grid-area' property.
            </p>
            <p>
                To start, let's give each of the children in our grid an identifying name. These need to be unique and you are best served by making them as obvious as possible so that you can easily recognise which part of your layout you are referring to, such as in this example where I have used "header" for header, "main" for main etc.
            </p>
            <MediaContainer addedClasses='float-media-left'>
                <img 
                    src={css1Img}
                    alt='initial CSS code for setting up CSS Grid and a representation of what that looks like.'
                    className='article-img'
                />
            </MediaContainer>
            <p>
                Now comes the fun bit. Back on our parent 'grid' class we can define the 'grid-template-areas' property. When defining this property the rows of your grid are seperated by quote marks (single or double), columns are defined by the number of words between those quote marks. For readability it is best to layout each row on it's own line, like in the example. I also have a personal readability preference for ensuring all my grid-areas have the same number of letters or are given additional spaces to make the columns line up, as you can see in the example, but this is not required.
            </p>
            <p>
                Aside from a few presentational bits of CSS for this example that is all that is required to get started with CSS Grid, no fuss and no hassle.
            </p>
            <br />
            <h3 className='article-subtitle'>Making Changes</h3>
            <MediaContainer addedClasses='float-media-right'>
                <img 
                    src={css2Img}
                    alt='adapted CSS code for CSS Grid and a representation of what that looks like.'
                    className='article-img'
                />
            </MediaContainer>
            <p>
                But imagine we have had a change of heart and actually the sidebar needs to sit on the left of the screen instead of the right. Well there is no need to touch the HTML or recalculate column lines (another method of setting layout in CSS Grid), instead we are just going to move the word 'side' in our 'grid-template-areas'. We can take it a step further and say that the side bar should not only be on the left but also be the height of the entire page.
            </p>
            <p>
                As you can see, the layout has shifted around to accommodate our new design. This is such a visual approach to coding a site's layout and so instantly adaptable that trying out new ideas isn't a problem and of course the adaptability also lends itself to ensuring our site is responsive.
            </p>
            <h3 className='article-subtitle'>Media Queries</h3>
            <p>
                Adjusting our code to be "mobile-first" and adding a media query allows us to quickly see the power of CSS Grid with media queries. Rather than having to overwrite each individual child and/or adapt a large number of properties on the parent, instead, as before we can immediately adapt the layout by changing just the 'grid-template-areas' property.
            </p>
            <p>
                Less code, layout visually represented AND instantly adaptable to new ideas! There are tons of other features, properties, and the 'fr' unit which make CSS Grid a robust layout tool, but the 'grid-template-areas' property stands out to me as one of the most powerful example while also being an accesible starting point for those interested in trying CSS Grid out. 
            </p>
            <MediaContainer addedClasses='float-media-left'>
                <img 
                    src={css3Img}
                    alt='adapted CSS code for CSS Grid and a representation of what that looks like.'
                    className='article-img'
                />
            </MediaContainer>
            <MediaContainer addedClasses='float-media-right'>
                <img 
                    src={css4Img}
                    alt='adapted CSS code for CSS Grid and a representation of what that looks like.'
                    className='article-img'
                />
            </MediaContainer>
        </ArticleContainer>
    )
}

export default LoveCSSGrid