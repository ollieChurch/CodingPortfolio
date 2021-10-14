import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Articles from './pages/Articles'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/articles'>
          <Articles />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
