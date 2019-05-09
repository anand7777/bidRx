import React, { Component } from 'react'
import MenuAppBar from './MenuAppBar.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import BidRequest  from './BidRequest.jsx'
import ViewRequests  from './ViewRequests.jsx';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <MenuAppBar />
          <Route path='/request' component={BidRequest} />
          <Route path='/view' component={ViewRequests} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App