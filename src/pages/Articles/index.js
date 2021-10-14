import {Route, Switch, useRouteMatch} from 'react-router-dom'

import './articles.css'
import ArticlesHeader from './ArticlesHeader'
import ArticlesHome from './ArticlesHome'
import ArticlePost from './ArticlePost'

function Articles() {
    let { path } = useRouteMatch(); 

    return (
        <div className='articles-pageContainer'>
            <ArticlesHeader />

            <main className='main-articles'>  
                <Switch>
                    <Route exact path={path}>
                        <ArticlesHome />
                    </Route>
                    
                    <Route path={`${path}/:topicId`}>
                        <ArticlePost />
                    </Route>
                </Switch>            
                
            </main>

            <footer className='footer-articles'>
                <p>Made by Ollie. Fuelled by tea.</p>
                <p>Copyright 2021</p>
            </footer>
        </div>
    )
}

export default Articles