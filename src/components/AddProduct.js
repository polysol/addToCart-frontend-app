import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
const axios = require('axios');

function AddProduct() {
    const history = useHistory();

    const [state, setState] = React.useState({
        name: "",
        surname: "",
        zip: "",
        email: "",
        city: "",
        object: "",
        info: "",
        price: 0
    });

    const submitForm = e => {
        e.preventDefault();
        const data = {
            name: state.name,
            surname: state.surname,
            zip: state.zip,
            prodTitle: state.object,
            city: state.city,
            prodDesc: state.info,
            email: state.email,
            price: Number(state.price)
        };
        axios({
            method: 'post',
            url: 'http://localhost:3500/create',
            data: data
        }).then(res => {
            alert("Η εγγραφή καταχωρήθηκε επιτυχώς");
            history.push('/')
        }).catch(() => alert("Παρουσιάστηκε κάποιο σφάλμα."))
    };

    const handleChange = evt => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    return (
        <div style={{backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width: 'calc(100vw - 5em)'}}>
            <div style={{paddingLeft: '25%', paddingTop: '5%', width: '50%'}}>
                <Typography variant="h6" gutterBottom style={{color: 'black'}}>
                    Καταχώρηση Αντικειμένου Προς Πώληση
                </Typography>
                <br></br>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="firstName"
                                name="name"
                                label="Όνομα"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="lastName"
                                name="surname"
                                label="Επώνυμο"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="city" name="city" label="Πόλη" fullWidth onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="zip"
                                name="zip"
                                label="Τ.Κ"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="object"
                                name="object"
                                label="Αντικείμενο προς πώληση"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="info"
                                name="info"
                                label="Περιγραφή αντικειμένου"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="price"
                                name="price"
                                label="Τιμή αντικειμένου"
                                fullWidth
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <br></br><br></br>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Αποθηκευση
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;