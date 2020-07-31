import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from "./Container";

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
  return (
    <div className={classes.root}>
        <Button variant="outlined" onClick={<Container />}>Πουλησε Αντικειμενο</Button>
        <Button variant="outlined" className={classes.search}>Αναζητησε Αντικειμενο</Button>
        <Button variant="outlined" className={classes.cart}>Καλαθι Αγορων</Button>
    </div>
  );
}

export default App;
