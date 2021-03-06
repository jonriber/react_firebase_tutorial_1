import React, {Component,Fragment} from 'react';
import {Button,TextField,Typography} from '@material-ui/core';
import FirebaseService from '../util/services/FirebaseService';
import {urls} from '../util/urlUtils';
import {withRouter,Link} from 'react-router-dom';

class Login extends Component {

    state = {
        email:'',
        password:''
    };

    // createUser = (event) => {
    //     event.preventDefault();
    //     const {email} = this.state;
    //     const {password} = this.state;

    //     FirebaseService.createUser(email,password).then(
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

    handleChange = name =>event => {
        this.setState({
            [name]:event.target.value,
        });
    };

    login = (event) => {
        event.preventDefault();
        const {email} = this.state;
        const {password} = this.state;
        FirebaseService.login(email,password).then(
            (user) => {
                this.props.history.push(urls.home.path);
                console.log(user);
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    };

    render = () => {
        return(
            <Fragment>
                <Typography variant='headline' component='h2'>
                    Welcome! Please Login.
                </Typography>
                <Typography>
                    <p>If you are new and want to register at our website, please <Link to={urls.register.path}>Sign Up here.</Link></p>
                </Typography>
                <form onSubmit={this.login}>
                    <TextField className='input-field'
                    type='email'
                    value={this.state.email}
                    label='email'
                    required
                    onChange={this.handleChange('email')}/>

                    <TextField className='input-field'
                    type='password'
                    value={this.state.password}
                    label='password'
                    required
                    onChange={this.handleChange('password')} />

                    <Button type='submit' style={{marginTop:'20px',display:'inline-block'}}>
                        Login
                    </Button>

                    {/* <Button onClick={this.createUser}
                        style={{marginTop:'20px',
                        display:'inline-block'}}>
                        New User
                    </Button> */}
                    {/* <Button style={{marginTop:'20px',display:'inline-block'}} component={props => <Link to={urls.register.path} {...props}/>}>
                        
                        Create new User.
                    </Button> */}
                </form>
            </Fragment>
        )
    };
}

export default withRouter(Login);