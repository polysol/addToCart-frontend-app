import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import { TableCell, TableRow } from "@material-ui/core";

function SearchProduct() {
    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MuiCheckbox: {
                root: {
                    display: 'none'
                }
            },
            MuiTableCell: {
                root: {
                    borderBottom: "unset"
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

    const columns = ["Προϊόν", "Τιμή", "Email Πωλητή", "Πόλη"];

    const options = {
        expandableRows: true,
        expandableRowsHeader: false,
        filter: false,
        selectableRows: 'single' || 'multiple',
        selectableRowsOnClick: true,
        renderExpandableRow: () => (
            <TableRow>
                <TableCell/>
                <TableCell>
                    Σε καλή κατάσταση. Ελαφρώς μεταχειρισμένος.
                </TableCell>
            </TableRow>
        ),
        onRowsSelect: function(row) {
        },
        download: false,
        print: false,
        viewColumns: false,
        customToolbarSelect: selectedRows => (
            <Tooltip title="Προσθήκη στο καλάθι">
                <IconButton
                    onClick={() => {
                        console.log("test");

                    }}
                    style={{
                        marginRight: "24px",
                        height: "48px",
                        top: "15px",
                        display: "block",
                        position: "relative",
                        transform: "translateY(-50%)"
                    }}
                >
                    <AddIcon />
                </IconButton>
            </Tooltip>
        ),
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
        ["Ανεμιστήρας", "15.00$", "aggelo@gmail.com", "Πάτρα"]
    ];
    return (
        <div style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)'}} >
            <div style={{paddingTop: '5%'}}>
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={"Προϊόντα προς πώληση"}
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
        </div>
        </div>
    );
}

export default SearchProduct;
