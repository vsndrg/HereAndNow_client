import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Settings() {
    const [toggleChecked, setToggleChecked] = useState<boolean>(false);
    const [showMapSyles, setShowMapStyles] = useState<boolean>(false);

    const handleToggleChange = () => {
        setToggleChecked(!toggleChecked);
        if ('vibrate' in navigator) {
            navigator.vibrate(100);
        }
    };

    const toggleMapSyles = () => {
        setShowMapStyles(!showMapSyles);
    };

    return (
        <div className="settings-content">
            <div className="settings-content-wrapper">
                <div className="user-info-wrapper">
                    <div className="edit-button">
                        <button>Edit</button>
                    </div>
                    <div className="div-row-user-info row-profile-photo">
                        <img src="client/assets/images/whigga.jpg" />
                    </div>
                    <div className="div-row-user-info row-user-info">
                        <div className="row-name-a">
                            <h1>Kuril Buhalov</h1>
                        </div>
                        <div className="row-user-name">
                            <p>@tatumwsg</p>
                        </div>
                    </div>
                </div>
                <div className="buttons-wrapper">
                    <div className="div-row-buttons">
                        <input
                            type="file"
                            id="profile-photo-change"
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                        <button
                            className="button change-photo-button"
                            onClick={() =>
                                document
                                    .getElementById('profile-photo-change')
                                    ?.click()
                            }
                        >
                            Change Profile Photo
                        </button>
                    </div>
                    <div className="div-row-buttons row-button-block">
                        <label className="button block-button hide-geo-toggle">
                            Hide Geolocation
                            <input
                                type="checkbox"
                                onChange={handleToggleChange}
                            />
                            <i></i>
                        </label>
                        {/* <Button
                            variant="contained"
                            className="button block-button map-style-button"
                            onClick={toggleMapSyles}
                            endIcon={<ArrowForwardIcon />}
                        >
                            Map Style{' '}
                        </Button>
                        {showMapSyles && (
                            <div className="map-styles-dropdown">
                                <ul>
                                    <li>Style 1</li>
                                    <li>Style 2</li>
                                    <li>Style 3</li>
                                </ul>
                            </div>
                        )} */}
                        <div
                            className="button block-button map-style-button"
                            onClick={toggleMapSyles}
                        >
                            Map Style{' '}
                            <i
                                className={`fas fa-chevron-right ${
                                    showMapSyles ? 'open' : ''
                                }`}
                            ></i>
                            {showMapSyles && (
                                <div className="map-styles-dropdown">
                                    <ul>
                                        <li>Style 1</li>
                                        <li>Style 2</li>
                                        <li>Style 3</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="div-row-buttons row-button-block">
                        <button className="button block-button logout-button">
                            Log Out
                        </button>
                        <button className="button block-button delete-acc-button">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
