import {urls} from '../util/urlUtils';
import {AppBar,IconButton,Toolbar,Typography,withStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React,{Fragment} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {logout} from '../actions/actionCreator';
import PropTypes from 'prop-types';

const styles = {
    root: {
        flexGrow:1,
    },
    flex: {
        flex:1,
    },
};

const TopBar = ({userAuth, logout, classes}) => 
(<AppBar position='static'>
    <Toolbar>
        <IconButton color='inherit' aria-label='Menu' component={props =>
        <Link to={urls.home.path} {...props}/>}>
            <HomeIcon/>
        </IconButton>
        <Typography type='title' color='inherit'>
            Desterro Kids Wep App
        </Typography>
        {
            userAuth &&
            <Fragment>
                <Typography type='title' color='inherit' style={{marginLeft:'20px'}}>
                    {userAuth.email}
                </Typography>
                <IconButton color='inherit' aria-label='Menu' onClick={() => logout()}>
                    <ArrowForwardIcon/>
                </IconButton>
            </Fragment>
        }
    </Toolbar>
</AppBar>);

const mapStateToProps = state => {
    return {userAuth: state.userAuth}
};

const mapDispatchToProps = dispatch => {
    return{
        logout: () =>dispatch(logout()),
    }
};

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    withRouter,
    connect(mapStateToProps,mapDispatchToProps)
)(TopBar);
