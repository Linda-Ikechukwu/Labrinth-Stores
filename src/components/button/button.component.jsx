import React from 'react';

import './button.styles.scss';

const Button = ({ children,isGoogleSignedIn,inverted, ...otherProps}) => (
    <button className={`${inverted ? 'button-inverted' : ' '}${isGoogleSignedIn ? 'button-google-sign-in' : ' '} button`} {...otherProps}>
        {children}
    </button>
)

export default Button;