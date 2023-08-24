import React from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import classes from './Main.module.css'

const Main = () => {
    return (
        <Card>
            <form className={classes.form}>
                <label for="username">User name: </label>
                <input type="text" name='username'/>
            </form>
            <Button>Add</Button>
        </Card>
    );
};

export default Main;