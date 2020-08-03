import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3),
            backgroundColor: '#2d88ff',
            height: '50px',
            color: 'white',
            width: '250px'
        },
        '& > *:hover' : {
            backgroundColor: '#3A3B3C',
        },
        textAlign: 'center',
        border: '1px'
    },
    search: {
        backgroundColor: 'red',
    },
    cart: {
        backgroundColor: 'green',
    }
}));

function App() {
    const classes = useStyles();
    const [addition, setAddition] = useState(false);
    const [search, setSearch] = useState(false);
    const [cart, setCart] = useState(false);

    function showHide(e){
        if(e.currentTarget.id==='sale') {
            setAddition(!addition);
            setSearch(false);
            setCart(false);
        } else if(e.currentTarget.id==='search') {
            setSearch(!search)
            setAddition(false);
            setCart(false);
        } else if(e.currentTarget.id==='cart') {
            setCart(!cart)
            setSearch(false);
            setAddition(false);
        }
    }
  return (
    <div className={classes.root}>
        <Button variant="outlined" id="sale" onClick={(e) => showHide(e)} >Πουλησε Αντικειμενο</Button>
        <Button variant="outlined" id="search" className={classes.search} onClick={(e) => showHide(e)}>Αναζητησε Αντικειμενο</Button>
        <Button variant="outlined" id="cart" className={classes.cart} onClick={(e) => showHide(e)}>Καλαθι Αγορων</Button>
        {addition ? <AddProduct /> : search ? <SearchProduct /> : cart ? <Cart /> : null}
    </div>
  );
}

export default App;
