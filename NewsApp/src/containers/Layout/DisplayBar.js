import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import PageNotFound from '../../components/PageNotFound';
import Home from '../../components/Home';
import NyoozById from '../../containers/Nyooz/NyoozById';
import NyoozByQuery from '../../containers/Nyooz/NyoozByQuery';

const DisplayBar = () => {
    return (
      <Router>
      <div className="col-sm-6 col-md-8 col-lg-9 col-xl-10 border-left" >

        <Switch>
          <Route path={'/'} component={Home} exact={true} />
          <Route path={'/news/searchQuery/:text'} component={NyoozByQuery} />
          <Route path={'/news/api/:text'} component={NyoozById} />
          <Route component={PageNotFound}/>
          </Switch>

      </div>
      </Router>
    );

};


export default DisplayBar;
