//importing components and modules
import React,{Component} from 'react';
import './App.css';
import {
  MuiThemeProvider,
  // AppBar,
  // Toolbar, 
  Typography,
  createMuiTheme,
  CardContent,
  Card,
  Button,
} from '@material-ui/core'
import lightGreen from "@material-ui/core/colors/lightGreen";
import DataTable  from './DataTable';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Add from './Add';
import Login from './Login';
import Register from './Register';
import Routes from './Routes';
import FirebaseService from '../util/services/FirebaseService'
import { Route,withRouter } from 'react-router-dom';
import {urls, privateUrls} from '../util/urlUtils';
import {login,logout} from '../actions/actionCreator';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import NavigationLoggedWrapper from '../NavigationLoggedWrapper/NavigationLoggedWrapper';
import NavigationWrapper from '../NavigationWrapper/NavigationWrapper';

const theme = createMuiTheme({
  palette: {
    primary:lightGreen,
  },
});

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.onAuthChange(
      (authUser) => this.props.login(authUser),
      () => this.props.logout()
    );

    FirebaseService.getDataList('atletas',(dataReceived) =>
    this.setState({data: dataReceived}))
  }

  render() {
      return (
        <MuiThemeProvider theme={theme}>
          <React.Fragment>
            <TopBar >
            {/* <AppBar position="static"> */}
              {/* <Toolbar>
                <Typography type='title' color='inherit'>
                  React + FireBase Tutorial 1!!
                </Typography>
              </Toolbar> */}
            {/* </AppBar> */}
            {/* <DataTable data={this.state.data} /> */}
            </TopBar>
            <Card style={{paddingTop:'5px'}}>
              <CardContent>
                {/* system routes */}
                {/* <Route exact path={urls.login.path} render={(props) => <NavigationLoggedWrapper component={Login} {...props}/>}/>
                <Route exact path={urls.register.path} render={(props) => <NavigationLoggedWrapper component={Register} {...props}/>}/>
                <Route exact path={urls.home.path} render={(props) => <NavigationWrapper component={Welcome} {...props}/>}/>
                <Route exact path={urls.data.path} render={(props) => <NavigationWrapper component={DataTable} {...props}
                 data={this.state.data}/>}/>
                <Route exact path={urls.add.path} render={(props) => <NavigationWrapper component={Add} {...props}/>}/>
                <Route exact path={privateUrls.edit.path} render={(props) => <NavigationWrapper component={Add} {...props} />}/>
                <Typography><h1>Teste de tela</h1></Typography> */}
                <Routes/>
              </CardContent>
            </Card>
          </React.Fragment>
        </MuiThemeProvider>
      );
    } 
}
const mapDispatchToProps = dispatch => {
  return {
    login: authUser => dispatch(login(authUser)),
    logout: () => dispatch(logout()),
  }
}; 

export default compose(
  withRouter,
  connect(null,mapDispatchToProps)
)(App);
