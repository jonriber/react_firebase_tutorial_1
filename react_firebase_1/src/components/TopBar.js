import {urls} from '../util/urlUtils';
import {AppBar,IconButton,Toolbar,Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import {Link} from 'react-router-dom';

const TopBar = () => <AppBar position='static'>
    <Toolbar>
        <IconButton color='inherit' aria-label='Menu' component={props =>
        <Link to={urls.home.path} {...props}/>}>
            <HomeIcon/>
        </IconButton>
        <Typography type='title' color='inherit'>
            My React with Firebase WebApp
        </Typography>
    </Toolbar>
</AppBar>;

export default TopBar;
