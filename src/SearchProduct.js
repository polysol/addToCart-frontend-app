import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

function SearchProduct() {

    const columns = ["Name", "Title", "Location"];

    const options = {
        filter: true,
        filterType: "dropdown",
        selectableRowsOnClick: true,
        onRowsSelect: function(row) {
            console.log(row[0].dataIndex)
        },

    };


    const data = [
        ["Gabby George", "Business Analyst", "Minneapolis"],
        [
            "Aiden Lloyd",
            "Business Consultant for an International Company and CEO of Tony's Burger Palace",
            "Dallas"
        ],
        ["Jaden Collins", "Attorney", "Santa Ana"],
        ["Franky Rees", "Business Analyst", "St. Petersburg"],
        ["Aaren Rose", null, "Toledo"],
        ["Johnny Jones", "Business Analyst", "St. Petersburg"],
        ["Jimmy Johns", "Business Analyst", "Baltimore"],
        ["Jack Jackson", "Business Analyst", "El Paso"],
        ["Joe Jones", "Computer Programmer", "El Paso"],
        ["Jacky Jackson", "Business Consultant", "Baltimore"],
        ["Jo Jo", "Software Developer", "Washington DC"],
        ["Donna Marie", "Business Manager", "Annapolis"],
        ["Donna Marie", "Business Manager", "Annapolis"]
    ];
    return (
        <div style={{ backgroundColor: '#ffffff', height: 'calc(100vh - 10em)', width:'calc(100vw - 5em)'}} >
            <div style={{paddingTop: '5%'}}>

            <MUIDataTable
                title={"ACME Employee list"}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
        </div>
    );
}

export default SearchProduct;
