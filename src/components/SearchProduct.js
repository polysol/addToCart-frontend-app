import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
const axios = require('axios');

function SearchProduct() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [code, setCode] = useState(0);
    const history = useHistory();
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
            MuiInputBase: {
                input: {
                    background: "none",
                    fontSize: '0.875rem',
                    padding: '6px 10px 7px 10px',
                    border: '1px black solid'
                }
            },
        }
    });

    const columns = ["Κωδικός Προϊόντος", "Προϊόν", "Περιγραφή", "Τιμή", "Email Πωλητή", "Πόλη"];

    const options = {
        filter: false,
        selectableRows: 'single',
        selectableRowsOnClick: true,
        onRowSelectionChange: function (row) {
            let index = row[0].dataIndex;
            setIndex(index);
            setCode(data[index][0]);
        },
        download: false,
        print: false,
        viewColumns: false,
        customToolbarSelect: selectedRows => (
            <>
                <Tooltip title="Επεξεργασία">
                    <IconButton
                        onClick={async () => {
                            history.push({
                                pathname: `/edit/${code}`,
                                state: {
                                    code: code
                                }
                            });
                        }}
                    >
                        <EditIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Προσθήκη στο καλάθι">
                    <IconButton
                        onClick={async () => {
                            await addToCart(code);
                            await history.push("/cart")
                        }}
                    >
                        <AddIcon/>
                    </IconButton>
                </Tooltip>
            </>
        ),
        rowsPerPageOptions: [],
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
        apiCall();
    }, []);

    const apiCall = async () => {
        await axios.get("http://localhost:3500/all")
            .then(res => {
                res.data.map(el => {
                    temp_data.push(Object.values(el));
                });
            }).catch(() => alert("Παρουσιάστηκε κάποιο σφάλμα."));
        setData(temp_data);
    };

    const addToCart = async (prodCode) => {
        await axios.post("http://localhost:3500/add?id=" + prodCode).catch(() => alert("Παρουσιάστηκε κάποιο σφάλμα."));
        await apiCall()
    };

    return (
        <div style={{backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width: 'calc(100vw - 5em)'}}>
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
