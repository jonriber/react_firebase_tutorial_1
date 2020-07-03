import React, {Component,Fragment} from 'react';
import {Button,TextField,Typography} from '@material-ui/core';
import FirebaseService from '../util/services/FirebaseService';
import {urls} from '../util/urlUtils';
import {withRouter,Link} from 'react-router-dom';

class Register extends Component {

    state = {
        email:'',
        password:''
    };

    createUser = (event) => {
        event.preventDefault();
        const {email} = this.state;
        const {password} = this.state;

        FirebaseService.createUser(email,password).then(
            (user) => {
                this.props.history.push(urls.login.path);
                console.log(user);
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    };

    handleChange = name =>event => {
        this.setState({
            [name]:event.target.value,
        });
    };

    // login = (event) => {
    //     event.preventDefault();
    //     const {email} = this.state;
    //     const {password} = this.state;
    //     FirebaseService.login(email,password).then(
    //         (user) => {
    //             this.props.history.push(urls.home.path);
    //             console.log(user);
    //         }
    //     ).catch(
    //         (error) => {
    //             alert(error.message)
    //         }
    //     )
    // };

    render = () => {
        return(
            <Fragment>
                <Typography variant='headline' component='h2'>
                    Register New User
                </Typography>
                <form onSubmit={this.createUser}>
                    <TextField className='input-field'
                    type='email'
                    value={this.state.email}
                    label='Your primary email'
                    required
                    onChange={this.handleChange('email')}/>

                    <TextField className='input-field'
                    type='password'
                    value={this.state.password}
                    label='Your password'
                    required
                    onChange={this.handleChange('password')} />

                    <Button type='submit' style={{marginTop:'20px',display:'inline-block'}}>
                        Create User
                    </Button>
                    {/* <Button to="/somewhere" renderAs={Link}>My button linked to react-router-dom</Button> */}
                    <Button style={{marginTop:'20px',display:'inline-block'}} component={props => <Link to={urls.login.path} {...props}/>}>
                    Return to Login
                </Button>
                </form>
            </Fragment>
        )
    };
}

export default withRouter(Register);