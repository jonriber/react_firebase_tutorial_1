import React,{Component} from 'react';
import './App.css';
import {
  MuiThemeProvider,
  AppBar,
  Toolbar, 
  Typography,
  createMuiTheme,
} from '@material-ui/core'
import red from "@material-ui/core/colors/red";
import DataTable from './DataTable';
import FirebaseService from '../util/services/FirebaseService'

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
            <AppBar position="static">
              <Toolbar>
                <Typography type='title' color='inherit'>
                  React + FireBase Tutorial 1!!
                </Typography>
              </Toolbar>
            </AppBar>
            <DataTable data={this.state.data} />
          </React.Fragment>
        </MuiThemeProvider>
      );
    }
}
export default App;
