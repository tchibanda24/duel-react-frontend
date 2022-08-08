import React, { Component, Fragment } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Layout from '../../hoc/Layout'
import NavBar from '../../components/NavBar'

import Home from '../Home'
import Duel from '../Duel'
import Inspect from '../Inspect'

class App extends Component {
  state = {
    logo: { text: 'dev-duel', link: '/' },
    items: [
      { text: 'inspect', link: '/inspect' },
      { text: 'duel', link: '/duel' },
      { text: 'cool', link: '/cool' }
    ]
  }

  render () {
    const { items, logo } = this.state
    return (
      <Fragment>
        <NavBar items={items} logo={logo} changed={this.setTitle}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/inspect' component={Inspect}/>
          <Route path='/duel' component={Duel} />}/>
          <Route path='/cool' render={() => <Redirect to='/38907'/>}/>
          <Route render={() => <h1>404 path not found</h1>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default Layout(App)
