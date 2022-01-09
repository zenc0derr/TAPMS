import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Company.css";
import "./myfont.css";

const Company = () => {
  const [companyList, setCompanylist] = useState([]);


  const getCompany = () => {
    Axios.get("http://localhost:3001/company").then((res) => {
      setCompanylist(res.data);
    });
  };

  const deleteCompany = (id) => {
    Axios.delete(`http://localhost:3001/deleteCompany/${id}`).then(
      (response) => {
        setCompanylist(
          companyList.filter((val) => {
            return val.Company_ID !== id;
          })
        );
      }
    );
  };  
  return (
    <div>
      <div className="add">
        <Link to='/addCompany'><button>Add</button></Link>
      </div>
      <button onClick={getCompany}>Show Companies</button>
      {companyList.map((val, key) => {
        return (
          <div className="company-box">
            <div className="company-title">
              <h1>{val.Comapny_Name}</h1>
            </div>
            <div className="company-link">
              Company Website: <a href="www.google.com">{val.Website}</a> <br />
            </div>
            <div className="edit-button">
              <button>
                <Link to={`/editcompany/${val.Company_ID}`}>Edit</Link>
              </button>
              <button
                onClick={() => {
                  deleteCompany(val.Company_ID);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Company;
