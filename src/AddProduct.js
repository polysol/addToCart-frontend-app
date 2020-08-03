import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

function AddProduct() {
    return (
        <div style={{ backgroundColor: '#cfe8fc', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)' }} >
            <br></br>
        <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Name</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
        </FormControl>
        </div>
    );
}

export default AddProduct;