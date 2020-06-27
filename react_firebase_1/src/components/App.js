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
import red from "@material-ui/core/colors/red";
import DataTable  from './DataTable';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Add from './Add';
import FirebaseService from '../util/services/FirebaseService'
import { Route } from 'react-router-dom';
import {urls} from '../util/urlUtils';

const theme = createMuiTheme({
  palette: {
    primary:red,
  },
});

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('leituras',(dataReceived) =>
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
            <Card variant='outlined'style={{paddingTop:'50px'}}>
              <CardContent>
                <Route exact path={urls.home.path} render={(props) => <Welcome {...props}/>}/>
                <Route exact path={urls.data.path} render={(props) => <DataTable {...props} data={this.state.data}/>}/>
                <Route exact path={urls.add.path} render={(props) => <Add {...props}/>}/>
              </CardContent>
            </Card>
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
}
export default App;
