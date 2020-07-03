import React,{Component} from 'react';
import DataTable  from './DataTable';
import Welcome from './Welcome';
import Add from './Add';
import Login from './Login';
import Register from './Register';
import { Route,withRouter } from 'react-router-dom';
import {urls, privateUrls} from '../util/urlUtils';
import NavigationLoggedWrapper from '../NavigationLoggedWrapper/NavigationLoggedWrapper';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';
import FirebaseService from '../util/services/FirebaseService'


class Routes extends Component {
    state = {
        data:[]
    };

    componentDidMount() {
        FirebaseService.onAuthChange(
            (authUser) => this.props.login(authUser),
            () => this.props.logout()
        );

        FirebaseService.getDataList('atletas',(dataReceived) =>
        this.setState({data:dataReceived}))
    }

    render = () => {
        return (
            <React.Fragment>
                <Route exact path={urls.login.path} render={(props) => <NavigationLoggedWrapper component={Login} {...props}/>}/>
                <Route exact path={urls.register.path} render={(props) => <NavigationLoggedWrapper component={Register} {...props}/>}/>
                <Route exact path={urls.home.path} render={(props) => <NavigationWrapper component={Welcome} {...props}/>}/>
                <Route exact path={urls.data.path} render={(props) => <NavigationWrapper component={DataTable} {...props}
                 data={this.state.data}/>}/>
                <Route exact path={urls.add.path} render={(props) => <NavigationWrapper component={Add} {...props}/>}/>
                <Route exact path={privateUrls.edit.path} render={(props) => <NavigationWrapper component={Add} {...props} />}/>
            </React.Fragment>    
    )
    }
    
}

export default Routes;