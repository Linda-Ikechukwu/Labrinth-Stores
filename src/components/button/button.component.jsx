import React from 'react';

import './button.styles.scss';

const Button = ({ children,isGoogleSignedIn, ...otherProps}) => (
    <button className={`${isGoogleSignedIn ? 'button-google-sign-in' : ' '} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;