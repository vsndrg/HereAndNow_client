import React, { useEffect } from 'react';
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

    useEffect(() => {
        function updateVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        updateVH();
        window.addEventListener('resize', updateVH);

        return () => {
            window.removeEventListener('resize', updateVH);
        };
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route>
                        <div className="main-area">
                            <Switch>
                                <Route
                                    path="/map"
                                    render={(props) => (
                                        <MapPage
                                            {...props}
                                            imageURL="client/assets/images/whigga.jpg"
                                        />
                                    )}
                                />
                                <Route
                                    path="/settings"
                                    component={SettingsPage}
                                />
                                <Route
                                    path="/friends"
                                    component={FriendsPage}
                                />
                                <Route path="/" component={FriendsPage} />
                            </Switch>
                        </div>
                        <div className="bottom-area">
                            <BottomNavigation />
                        </div>
                    </Route>
                    {/* <Redirect exact from="/" to="/login" /> */}
                    {/* <Redirect exact from="/" to="/map" /> */}
                </Switch>
            </div>
        </Router>
    );
}
