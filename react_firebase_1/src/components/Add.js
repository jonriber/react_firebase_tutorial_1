import {Button,TextField,Typography} from '@material-ui/core';
import React,{Component} from 'react';
import FirebaseService from '../util/services/FirebaseService';
import {urls} from '../util/urlUtils';
import {withRouter} from 'react-router-dom';

class Add extends Component{

    state = {id:null, name:'',birthday:'',country:'',school:'',mother:'',email:''};

    componentWillMount = () => {
        const {id} = this.props.match.params;

        if(!(id === undefined || !id)) {
            this.setState({id});
            FirebaseService.getUniqueDataBy('atletas',id,(data) =>
            this.setState({...data}, () => console.log(this.state)));
        }
    };
    submit = (event) => {
        event.preventDefault();

        const {name} = this.state;
        const {birthday} = this.state;
        const {country} = this.state;
        const {school} = this.state;
        const {mother} = this.state;
        const {email} = this.state;


        let objToSubmit = {
            name,
            birthday,
            country,
            school,
            mother,
            email
        };

        if (this.props.match.params.id === undefined) {
            FirebaseService.pushData('atletas',objToSubmit);
        } else {
            FirebaseService.updateData(this.props.match.params.id,'atletas',objToSubmit)
        }
        this.props.history.push(urls.data.path);
    };

    handleChange = name => event => {
        this.setState({
            [name]:event.target.value,
        });
    };

    render = () =>  (
        <React.Fragment>
            <Typography variant='headline' component='h2'>Register New Athlete</Typography>
            <form onSubmit={this.submit}>

                <TextField className='input-field'
                type='text'
                value={this.state.name}
                label = 'Name'
                required onChange={this.handleChange('name')}/>

                <TextField className='input-field'
                type='text'
                label='birthday'
                value={this.state.birthday}
                required
                onChange={this.handleChange('birthday')}/>

                <TextField className='input-field'
                type='text'
                label='country'
                value={this.state.country}
                required
                onChange={this.handleChange('country')}/>

                <TextField className='input-field'
                type='text'
                label='school'
                value={this.state.school}
                required
                onChange={this.handleChange('school')}/>

                <TextField className='input-field'
                type='text'
                label='mother'
                value={this.state.mother}
                required
                onChange={this.handleChange('mother')}/>        

                <TextField className = 'input-field'
                type='email'
                label='Email'
                value={this.state.email}
                required
                onChange={this.handleChange('email')}/>

                <Button type='submit' variant='contained' color= 'primary' style={{marginTop:'20px',}}>
                    Register
                </Button>
            </form>
        </React.Fragment>
    )
}

export default withRouter(Add);