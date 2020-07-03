import React from 'react';
import {
    Table,
    TableBody,
    TableCell, 
    TableHead, 
    TableRow, 
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import FirebaseService from '../util/services/FirebaseService';
import { privateUrls } from '../util/urlUtils';
import {Link} from 'react-router-dom';

//DataTable props data
const DataTable = ({data}) => {

    const remove = (id) => {
        FirebaseService.remove(id,'atletas');
    };

    return (
        <React.Fragment>
            <Typography variant='headline' component='h2'>Registered Athletes</Typography>
            <Table selectable={false}>
                <TableHead>
                    <TableRow>
                        {/* <TableCell>Key</TableCell> */}
                        <TableCell>Name</TableCell>
                        <TableCell>Birthday</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>School</TableCell>
                        <TableCell>Mother</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((item,index)=>
                        <TableRow key={index}>
                            {/* <TableCell>{item.key}</TableCell> */}
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.birthday}</TableCell>
                            <TableCell>{item.country}</TableCell>
                            <TableCell>{item.school}</TableCell>
                            <TableCell>{item.mother}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <RemoveIcon onClick={() => remove (item.key)}/>
                                </IconButton>
                                <Button component={props =>
                               <Link to={privateUrls.edit.pathWithoutParam + item.key} {...props}/> }>
                                    Edit
                                </Button>
                                {/* <IconButton> 
                                    <EditIcon>
                                    </EditIcon>
                                </IconButton> */}
                            </TableCell>
                        </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    )
};

export default DataTable;
