import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Header from '../components/Header';

const routes = () => {

    return (
        <Router>
            {/* <Header/> */}
            <Switch>
                <Route exact path='/'>
                    {/* <Questions/> */}
                </Route>
                <Route path="/detail/:id">
                    {/* <QuestionsDetail/> */}
                </Route>
            </Switch>
        </Router>
    )
}

export default routes;