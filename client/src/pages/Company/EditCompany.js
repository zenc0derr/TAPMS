import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";

const EditCompany = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [website, setWebsite] = useState('');

    const editCompany = (id) => {
        Axios.put("http://localhost:3001/Editcompany", {
          Company_Name: name,
          Company_Website: website,
          Company_id: id,
        }).then((response) => {
          console.log(response);
        });
      };

    return (
        <div>
            <input type="text" onChange={(e) => {setName(e.target.value)}}/>
            <input type="text" onChange={(e) => {setWebsite(e.target.value)}}/>
            <button onClick={() => {editCompany(id)}}>Save</button>
        </div>
    )
}

export default EditCompany
