import React from 'react';
import Card from './ui/Card';
import classes from './Header.module.css'

const Header = () => {
    return (
        <Card>
            <header className={classes.header}>
                <h1>Logo</h1>
                <ul>
                    <li>Main</li>
                    <li>Product</li>
                    <li>Information</li>
                    <li>Footer</li>
                </ul>
            </header>
        </Card>
    );
};

export default Header;