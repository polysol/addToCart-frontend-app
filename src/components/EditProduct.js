import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
const axios = require('axios');

function EditProduct(props) {

    const history = useHistory();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [object, setObject] = useState("");
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState(0);

    useEffect(() => {
        apiCall();
    },[]);

    const apiCall = async () => {
        await axios.get("http://localhost:3500/getProduct?id="+props.code)
            .then(res => {
                setInfo(res.data.prod_desc);
                setName(res.data.name);
                setSurname(res.data.surname);
                setEmail(res.data.email);
                setCity(res.data.city);
                setZip(res.data.zip);
                setPrice(res.data.price);
                setObject(res.data.prod_title);
                console.log(res.data)
            })
            .catch((error)=>{
                alert(error);
            });
    };

    const submitForm = e => {
        e.preventDefault();
        const data = {
            name: name,
            surname: surname,
            zip: zip,
            prodTitle: object,
            city: city,
            prodDesc: info,
            email: email,
            price: Number(price)
        };
        axios({
            method: 'put',
            url: 'http://localhost:3500/edit?id='+props.code,
            data: data
        }).then(res => {
            history.push(`/search`);
        })
            .catch((error)=>{
                alert(error);
            });
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
                    Επεξεργαστείτε το προς πώληση αντικείμενο
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
                                value={email}
                                fullWidth
                                onChange={emailChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="city" name="city" value={city} label="Πόλη" fullWidth onChange={cityChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="zip"
                                name="zip"
                                value={zip}
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
                                value={object}
                                fullWidth
                                onChange={objectChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="info"
                                name="info"
                                label="Περιγραφή αντικειμένου"
                                value={info}
                                fullWidth
                                onChange={infoChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="price"
                                name="price"
                                label="Τιμή αντικειμένου"
                                value={price}
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

export default EditProduct;