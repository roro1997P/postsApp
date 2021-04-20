import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Detail } from '../components/Detail';
import { EditForm } from '../components/EditForm';
import { ErrorScreen } from '../components/ErrorScreen';
import { FormScreen } from '../components/FormScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../components/ui/Navbar';

import '../index.css';

export const AppRouter = () => {
    return (  
        <div>
            <Router>
            <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={ HomeScreen } />
                        <Route exact path="/new" component={ FormScreen } />
                        <Route exact path="/detail/:id" component={ Detail }/>
                        <Route exact path="/edit/:id" component={ EditForm }/>
                        <Route path="/404" component={ ErrorScreen }/>

                        <Redirect to="/404" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}