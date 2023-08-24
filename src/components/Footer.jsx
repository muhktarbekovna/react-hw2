import React from 'react';
import Card from './ui/Card';
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <Card>
            <ul className={classes.info}>
                <li>About Us</li>
                <li>Editorial Ethics Policy</li>
                <li>Meet The Editors</li>
                <li>Advertisers</li>
                <li> Partner with Us</li>
                <li> Media Kit</li>
                <li>Corporate Site</li>
                <li>Contributors</li>
                <li>Reprints</li>
                <li>Answers</li>
                <li>Definitions</li>
                <li>E-Products</li>
                <li>Events</li>
                <li>Features</li>
                <li>Guides</li>
                <li>Opinions</li>
                <li>Photo Stories</li>
                <li>Quizzes</li>
                <li>Tips</li>
                <li>Tutorials</li>
                <li>Videos</li>
            </ul>
        </Card>
    );
};

export default Footer;