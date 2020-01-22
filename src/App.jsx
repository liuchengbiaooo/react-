import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShouYe from "./pages/ShouYe/ShouYe"
import FenLei from "./pages/FenLei/FenLei"
import ShiWu from "./pages/ShiWu/ShiWu"
import GouWuChe from "./pages/GouWuChe/GouWuChe"
import GeRen from "./pages/GeRen/GeRen"
import NotFound from "./pages/NotFound/not-found"
import FootGuide from "./components/FootGuide/FootGuide"

import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    const path = this.props.location.pathname
    const showPaths = ['/shouye', '/fenlei', '/shiwu', '/gouwuche']
    const showFooter = showPaths.indexOf(path)>=0
    return (
      <div>
        <Switch>
          <Redirect exact from='/' to='/shouye'/>
          <Route path='/shouye' component={ShouYe}/>
          <Route path='/fenlei' component={FenLei}/>
          <Route path='/shiwu' component={ShiWu}/>
          <Route path='/gouwuche' component={GouWuChe}/>
          <Route path='/geren' component={GeRen}/>
          <Route component={NotFound}/>
        </Switch>
        {showFooter ? <FootGuide/> : null}
      </div>
    )
  }
}

export default withRouter(App)