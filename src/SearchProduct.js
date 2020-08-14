import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from "@material-ui/core/IconButton";
import {createMuiTheme,MuiThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const axios = require('axios');

function SearchProduct() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [code, setCode] = useState(0);
    const [object, setObject] = useState("");
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MuiInput: {
                input: {
                    "&::placeholder": {
                        color: "black",
                        opacity: 0.7
                    }
                }
            },
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
            customBodyRender: (value) => {
                return (
                    <TextField
                        placeholder={value}
                        onChange={objectChange}
                    />
                )
            }
        }
    },
        {
            label: "Περιγραφή",
            options: {
                customBodyRender: (value) => {
                    return (
                        <TextField
                            placeholder={value}
                            onChange={infoChange}
                        />
                    )
                }
            }
        },
        {
        label: "Τιμή",
        options: {
            customBodyRender: (value) => {
                return (
                    <TextField
                        placeholder={value}
                        onChange={priceChange}
                    />
                )
            }
        }
    }, {
        label: "Email Πωλητή",
        options: {
            customBodyRender: (value) => {
                return (
                    <TextField
                        placeholder={value}
                        onChange={emailChange}
                    />
                )
            }
    }
}, {
        label: "Πόλη",
            options: {
                customBodyRender: (value) => {
                    return (
                        <TextField
                            placeholder={value}
                            onChange={cityChange}
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
            setIndex(index);
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
        onClick={async () => {
            await updateRow(code,object,city,info,email,price);
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

    const updateRow = async (code,object,city,info,email,price) => {
        const data = {
            prodTitle: object,
            city: city,
            prodDesc: info,
            email: email,
            price: Number(price)
        };
         axios({
            method: 'put',
            url: 'http://localhost:3500/edit?id='+code,
            data: data
        }).then(res => {
            console.log(res)
             apiCall();
         });
    };

    const objectChange = e => {
        setObject(e.target.value);
        setPrice(data[index][3]);
        setEmail(data[index][4]);
        setInfo(data[index][2]);
        setCity(data[index][5]);
    };

    const priceChange = e => {
        setPrice(e.target.value);
        setObject(data[index][1]);
        setEmail(data[index][4]);
        setInfo(data[index][2]);
        setCity(data[index][5]);
    };

    const emailChange = e => {
        setEmail(e.target.value);
        setObject(data[index][1]);
        setPrice(data[index][3]);
        setInfo(data[index][2]);
        setCity(data[index][5]);
    };

    const infoChange = e => {
        setInfo(e.target.value);
        setObject(data[index][1]);
        setEmail(data[index][4]);
        setPrice(data[index][3]);
        setCity(data[index][5]);
    };

    const cityChange = e => {
        setCity(e.target.value);
        setObject(data[index][1]);
        setEmail(data[index][4]);
        setInfo(data[index][2]);
        setPrice(data[index][3]);
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
