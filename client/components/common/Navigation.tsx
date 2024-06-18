import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';

export function BottomNavigation() {
    const history = useHistory();
    const location = useLocation();

    const getActiveClass = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="bottom-navigation">
            <button
                className={getActiveClass('/friends')}
                onClick={() => {
                    history.push('/friends');
                }}
            >
                Friends
            </button>
            <button
                className={getActiveClass('/map')}
                onClick={() => {
                    history.push('/map');
                }}
            >
                Map
            </button>
            <button
                className={getActiveClass('/settings')}
                onClick={() => {
                    history.push('/settings');
                }}
            >
                Settings
            </button>
            {/* <NavLink exact to="/friends" className="active">
                Friends
            </NavLink>
            <NavLink exact to="/map" className="active">
                Map
            </NavLink>
            <NavLink exact to="/settings" className="active">
                Settings
            </NavLink> */}
        </nav>
    );
}
