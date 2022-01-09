import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCompany = () => {
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');
    const [Companyid, setCompanyId] = useState(0);
    let history = useNavigate();

    const addCompany = () => {
        Axios.post("http://localhost:3001/addCompany", {
          Comapny_Name: name,
          Website: website,
          id: Companyid
        }).then(() => {
            history("/company");
        });
      };

    return (
        <div>
        <div>
          <input type="text" onChange={(e) => {setName(e.target.value)}}/>
          <input type="text" onChange={(e) => {setWebsite(e.target.value)}}/>
          <input type="number" onChange={(e) => {setCompanyId(e.target.value)}}/>
          <button onClick={addCompany}>Submit</button>
        </div>
        </div>
    )
}

export default AddCompany
