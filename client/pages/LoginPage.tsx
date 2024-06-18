import React from 'react';
import { useHistory } from 'react-router';

export function LoginPage() {
    const history = useHistory();

    return (
        <div className="login-wrapper">
            <div className="login-content">
                <div className="login-content-wrapper">
                    <div className="div-row row-title">
                        <h2>Sign in</h2>
                    </div>
                    <div className="div-row row-username">
                        <input
                            type="text"
                            className="input"
                            placeholder="username"
                        />
                    </div>
                    <div className="div-row row-password">
                        <input
                            type="password"
                            className="input"
                            placeholder="password"
                        />
                    </div>
                    <div className="div-row">
                        <button
                            className="submit-button"
                            onClick={() => {
                                history.push('/map');
                            }}
                        >
                            Login
                        </button>
                    </div>
                    <div className="div-row">
                        <button
                            className="signup-button"
                            onClick={() => history.push('/register')}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
