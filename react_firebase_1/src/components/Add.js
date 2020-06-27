import {Button,TextField,Typography} from '@material-ui/core';
import React,{Component} from 'react';
import FirebaseService from '../util/services/FirebaseService';
import {urls} from '../util/urlUtils';
import {withRouter} from 'react-router-dom';

class Add extends Component{
    submit = (event) => {
        event.preventDefault();

        const {temperatura} = this;
        const {umidade} = this;
        const {data} = this;
        const {cliente} = this;

        const newid = FirebaseService.pushData('leituras',{
            temperatura,
            umidade,
            data,
            cliente
        });
        this.props.history.push(urls.data.path);
    };
    render = () =>  (
        <React.Fragment>
            <Typography variant='headline' component='h2'>Adicionar Novo Dado</Typography>
            <form onSubmit={this.submit}>

                <TextField className='input-field'
                type='text'
                defaultValue={''}
                label = 'Temperatura'
                required onChange={e => this.temperatura= e.target.value}/>

                <TextField className='input-field'
                type='text'
                label='Umidade'
                defaultValue={''}
                required
                onChange={e => this.umidade = e.target.value}/>

                <TextField className='input-field'
                type='text'
                label='Data'
                defaultValue={''}
                required
                onChange={e => this.data = e.target.value}/>

                <TextField className = 'input-field'
                type='email'
                label='Cliente'
                defaultValue={''}
                required
                onChange={e => this.cliente = e.target.value}/>

                <Button type='submit' variant='contained' color= 'primary' style={{marginTop:'20px',}}>
                    Adicionar
                </Button>
            </form>
        </React.Fragment>
    )
}

export default withRouter(Add);