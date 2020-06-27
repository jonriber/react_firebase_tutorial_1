import {urls} from '../util/urlUtils';
import {Button,Typography} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <React.Fragment>
            <Typography variant="headline" component='h2'>
                Barra de Navegação do site!
            </Typography>
            {
                Object.values(urls).map((url,index) => {
                    return <Button raised
                    key={index}
                    component={props =>
                        <Link to={url.path} {...props}/>
                        }
                    >
                        {url.name}
                    </Button>
                })
            }
        </React.Fragment>
    )
};

export default Welcome;