import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { history } from '_helpers';
import { Login, Register } from './';

export { AccountLayout };

function AccountLayout() {
    const auth = useSelector(x => x.auth.value);

    useEffect(() => {
        // redirect to home if already logged in
        if (auth) history.navigate('/');
    }, []);

    // prevent flicker before redirect if already logged in
    if (auth) return null;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <Routes>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
