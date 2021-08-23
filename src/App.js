import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      
      {/* <Route exact path='/movies/:id'>
        <Movie />
      </Route> */}
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
  )
}

export default App
