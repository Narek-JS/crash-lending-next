import React from 'react';
import classes from './index.module.css';

const Container: React.FC<any> = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export { Container };