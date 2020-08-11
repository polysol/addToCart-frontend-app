import React, {useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
const axios = require('axios');

function Cart() {
    const [data, setData] = useState([]);
    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MuiCheckbox: {
                root: {
                    display: 'none'
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontWeight: 'bold',
                    fontSize: '16px'
                }
            },
        }
    });

    const columns = ["Κωδικός Προϊόντος", "Προϊόν", "Περιγραφή προϊόντος", "Τιμή"];

    const options = {
        filter: false,
        selectableRows: 'single' || 'multiple',
        selectableRowsOnClick: true,
        onRowSelectionChange: function(row) {
            let he = row[0].dataIndex
            console.log(data[he][0])
        },
        onRowsDelete: function(row) {
            console.log("dsufhuifs")
        },
        download: false,
        print: false,
        viewColumns: false,
        rowsPerPageOptions:  [] ,
        textLabels: {
            selectedRows: {
                text: "επιλεγμένα προϊόντα"
            },
            pagination: {
                rowsPerPage: "",
                displayRows: "από",
            }
        }

    };

    const temp_data = [];


    useEffect(() => {
        const apiCall = async () => {
            await axios.get("http://localhost:3500/cartAll")
                .then(res => {
                    res.data.forEach(el => temp_data.push(Object.values(el)));
                });
            setData(temp_data)
        };
        apiCall();
    },[]);

    return (
        <div style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)'}} >
            <div style={{paddingTop: '5%'}}>
                <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        title={"Καλάθι Αγορών"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </div>
            <h4 style={{ color: "black"}}>Σύνολο: <i>12.00$</i></h4>
        </div>
    );
}

export default Cart;
