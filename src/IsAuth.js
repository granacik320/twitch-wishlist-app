import React from 'react';
import { useIsAuthenticated } from 'react-auth-kit';

const IfAuth = ({ children, otherwise }) => {
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated()) {
        return <>{children}</>;
    } else {
        return <>{otherwise}</>;
    }
}

export default IfAuth