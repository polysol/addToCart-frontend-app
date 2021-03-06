import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddProduct from "./components/AddProduct";
import SearchProduct from "./components/SearchProduct";
import Cart from "./components/Cart";
import EditProduct from "./components/EditProduct";
import {Route, BrowserRouter, Switch, useParams} from 'react-router-dom';

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
        '& > *:hover': {
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
    },
}));

function BlogPost() {
    let {slug} = useParams();
    return <EditProduct code={slug}/>;
}

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Route render={({history}) => (
                    <>
                        <Button variant="outlined" id="sale" onClick={(e) => {
                            history.push('/add')
                        }}>Πουλησε Αντικειμενο</Button>
                        <Button variant="outlined" id="search" className={classes.search} onClick={(e) => {
                            history.push('/search')
                        }}>Αναζητησε Αντικειμενο</Button>
                        <Button variant="outlined" id="cart" className={classes.cart} onClick={(e) => {
                            history.push('/cart')
                        }}>Καλαθι Αγορων</Button>
                    </>
                )}/>
                <Switch>
                    <Route path="/" component={AddProduct} exact/>
                    <Route path="/add" component={AddProduct}/>
                    <Route path="/search" component={SearchProduct}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/edit/:slug" component={BlogPost}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
