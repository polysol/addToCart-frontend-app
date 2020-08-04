import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";

function AddProduct() {
    return (
        <div style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)'}} >
            <div style={{paddingLeft: '25%', paddingTop: '5%' , width: '50%'}}>
                <Typography variant="h6" gutterBottom style={{color: 'black'}}>
                    Καταχώρηση Αντικειμένου Προς Πώληση
                </Typography>
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Όνομα"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Επώνυμο"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="object"
                            name="object"
                            label="Αντικείμενο προς πώληση"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="info"
                            name="info"
                            label="Περιγραφή αντικειμένου"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="price"
                            name="price"
                            label="Τιμή αντικειμένου"
                            fullWidth
                            autoComplete="shipping address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" name="city" label="Πόλη" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Τ.Κ"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <br></br><br></br>
                <Button
                    variant="contained"
                    color="primary"
                >
                    Αποθηκευση
                </Button>
            </div>
        </div>
    );
}

export default AddProduct;