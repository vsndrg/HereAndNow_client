import React from 'react';
import { BottomNavigation } from './components/common/Navigation';
import { MapPage } from './pages/MapPage';
import { SettingsPage } from './pages/SettingsPage';
import { FriendsPage } from './pages/FriendsPage';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

export function App() {
    let login: boolean = false;

    return (
        <Router>
            <div className="app-container">
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/settings" component={SettingsPage} />
                    <Route path="/friends" component={FriendsPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/" component={MapPage} />
                    {/* <Redirect exact from="/" to="/login" /> */}
                    {/* <Redirect exact from="/" to="/map" /> */}
                </Switch>
                <BottomNavigation />
            </div>
        </Router>
    );
}
