import React, { useState } from 'react'
import Axios from "axios";

const Company = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyWesite, setCompanyWebsite] = useState("");
    const [companyList, setCompanylist] = useState([]);

    const getCompany = () => {
        Axios.get("http://localhost:3001/company").then((res) => {
          console.log(res);
          setCompanylist(res.data);
        });
    };

    const deleteCompany = (id) => {
        console.log(id);
        Axios.delete(`http://localhost:3001/deleteCompany/${id}`).then((response) => {
            setCompanylist(
            companyList.filter((val) => {
              return val.Company_ID != id;
            })
          );
        });
      };    
    return (
        <div>
            <button onClick={getCompany}>Show Companies</button>
            {companyList.map((val,key)=>{
                return(
                    <div>
                        <h2>{val.Comapny_Name}</h2>
                        <h3>{val.Website}</h3>
                        <button onClick={() => {deleteCompany(val.Company_ID)}}>Delete</button>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Company;
