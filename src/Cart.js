import React from "react";
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

function Cart() {
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
        onRowsSelect: function(row) {
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

    const data = [
        ["Joe Jones", "Computer Programmer"],
        ["Jacky Jackson", "Business Consultant"],
        ["Jo Jo", "Software Developer"],
        ["Donna Marie", "Business Manager"],
        ["Donna Marie", "Business Manager"]
    ];
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
