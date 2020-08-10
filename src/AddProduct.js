import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

function AddProduct() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [object, setObject] = useState("");
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState("");
    const submitForm = e => {
        e.preventDefault();
        console.log("surname: "+surname)
        console.log("name: "+name)
        console.log("email: "+email)
        console.log("city: "+city)
        console.log("object: "+object)
        console.log("zip: "+zip)
        console.log("info: "+info)
        console.log("price: "+price)
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+ "http://localhost:3500/cartAll").then(response => response.json()).then(data => console.log(data));


    };
    const surnameChange  = e => {
        setSurname(e.target.value)
    };

    const nameChange = e => {
        setName(e.target.value)
    };

    const emailChange = e => {
        setEmail(e.target.value)
    };

    const cityChange = e => {
        setCity(e.target.value)
    };

    const zipChange = e => {
        setZip(e.target.value)
    };

    const objectChange = e => {
        setObject(e.target.value)
    };

    const infoChange = e => {
        setInfo(e.target.value)
    };

    const priceChange = e => {
        setPrice(e.target.value)
    };


    return (
        <div style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)'}} >
            <div style={{paddingLeft: '25%', paddingTop: '5%' , width: '50%'}}>
                <Typography variant="h6" gutterBottom style={{color: 'black'}}>
                    Καταχώρηση Αντικειμένου Προς Πώληση
                </Typography>
                <br></br>
                <form onSubmit={submitForm}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="firstName"
                            name="firstName"
                            label="Όνομα"
                            fullWidth
                            value={name}
                            onChange={nameChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Επώνυμο"
                            fullWidth
                            value={surname}
                            onChange={surnameChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            onChange={emailChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" name="city" label="Πόλη" fullWidth onChange={cityChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Τ.Κ"
                            fullWidth
                            onChange={zipChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="object"
                            name="object"
                            label="Αντικείμενο προς πώληση"
                            fullWidth
                            onChange={objectChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="info"
                            name="info"
                            label="Περιγραφή αντικειμένου"
                            fullWidth
                            onChange={infoChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="price"
                            name="price"
                            label="Τιμή αντικειμένου"
                            fullWidth
                            onChange={priceChange}
                        />
                    </Grid>
                </Grid>
                <br></br><br></br>
                <Button
                    variant="contained"
                    color="primary"
                    type = "submit"
                >
                    Αποθηκευση
                </Button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;