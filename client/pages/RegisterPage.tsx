import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router';

export function RegisterPage() {
    const history = useHistory();

    const [usernameStatus, setUsernameStatus] = useState<boolean | null>(null);
    const [profilePhotoSelected, setProfilePhotoSelcted] =
        useState<boolean>(false);

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value;

        if (username === 'a') {
            setUsernameStatus(true);
        } else if (username === '') {
            setUsernameStatus(null);
        } else {
            setUsernameStatus(false);
        }
    };

    const handleProfilePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setProfilePhotoSelcted(true);
        } else {
            setProfilePhotoSelcted(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-content">
                <div className="login-content-wrapper">
                    <div className="div-row row-title">
                        <h2>Create an account</h2>
                    </div>
                    <div className="register-div-row row-name">
                        <input
                            type="text"
                            className="register-input"
                            placeholder="your name"
                        />
                    </div>
                    <div className="register-div-row row-username">
                        <input
                            id="username"
                            type="text"
                            className="register-input"
                            placeholder="username"
                            onChange={handleUsernameChange}
                        />
                        <label
                            htmlFor="username"
                            id="username_label"
                            style={{ color: usernameStatus ? 'green' : 'red' }}
                        >
                            {usernameStatus === null
                                ? ''
                                : usernameStatus === true
                                ? 'username is available'
                                : 'username is not available'}
                        </label>
                    </div>
                    <div className="register-div-row row-password">
                        <input
                            type="password"
                            className="register-input"
                            placeholder="password"
                        />
                    </div>
                    <div className="register-div-row row-image">
                        <input
                            type="file"
                            id="profile-photo"
                            accept="image/*"
                            className="register-input"
                            onChange={handleProfilePhotoChange}
                            style={{ display: 'none' }}
                        />
                        <button
                            className="profile-photo-button"
                            onClick={() =>
                                document
                                    .getElementById('profile-photo')
                                    ?.click()
                            }
                        >
                            Profile photo{' '}
                            {profilePhotoSelected && <span>&#10004;</span>}
                        </button>
                    </div>
                    <div className="register-div-row">
                        <button
                            className="register-create-button"
                            onClick={() => history.push('/map')}
                        >
                            {' '}
                            Create
                        </button>
                    </div>
                    <div className="register-div-row">
                        <button
                            className="register-signin-button"
                            onClick={() => history.push('/login')}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
