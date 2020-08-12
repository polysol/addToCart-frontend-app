import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from "@material-ui/core/IconButton";
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
const axios = require('axios');

function SearchProduct() {
    const [data, setData] = useState([]);
    const [code, setCode] = useState(0);
    const [prodTitle, setProdTitle] = useState("");
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

    const columns = [ "Κωδικός Προϊόντος",
        {
        label: "Προϊόν",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <FormControlLabel
                        required
                        value={value}
                        control={<TextField value={value} />}
                        onChange={e => updateValue(e.target.value)}
                    />

                )
            }
        }
    },
        {
            label: "Περιγραφή",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <FormControlLabel
                            required
                            value={value}
                            control={<TextField value={value} />}
                            onChange={event => updateValue(event.target.value)}
                        />
                    )
                }
            }
        },
        {
        label: "Τιμή",
        options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <FormControlLabel
                        required
                        value={value}
                        control={<TextField value={value} />}
                        onChange={event => updateValue(event.target.value)}
                    />
                )
            }
        }
    }, {
        label: "Email Πωλητή",
        options: {
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
                <FormControlLabel
                    required
                    value={value}
                    control={<TextField value={value} />}
                    onChange={event => updateValue(event.target.value)}
                />
            )
        }
    }
}, {
        label: "Πόλη",
            options: {
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <FormControlLabel
                        required
                        value={value}
                        control={<TextField value={value} />}
                        onChange={event => updateValue(event.target.value)}
                    />
                )
            }
        }
    }
    ];

    const options = {
        filter: false,
        selectableRows: 'single',
        selectableRowsOnClick: true,
        onRowSelectionChange: function(row) {
            let index = row[0].dataIndex;
            setCode(data[index][0]);
        },
        download: false,
        print: false,
        viewColumns: false,
        customToolbarSelect: selectedRows => (
            <React.Fragment>
            <Tooltip title="Προσθήκη στο καλάθι">
                <IconButton
                    onClick={async () => {
                        await addToCart(code);
                    }}
                >
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Αποθήκευση αλλαγών">
        <IconButton
        onClick={() => {
            console.log(prodTitle);
    }}
>
<SaveIcon />
    </IconButton>
</Tooltip>
</React.Fragment>
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


    const temp_data = [];
    useEffect(() => {
        apiCall();
    },[]);

    const apiCall = async () => {
        await axios.get("http://localhost:3500/all")
            .then(res => {
                res.data.forEach(el => {
                    temp_data.push(Object.values(el));
                });
            });
        setData(temp_data);
    };

    const addToCart = async (prodCode) => {
        await axios.post("http://localhost:3500/add?id="+prodCode);
        await apiCall()
    };

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
