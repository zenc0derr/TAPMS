import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";

const EditCompany = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [SchoolCampus, setCampus] = useState('');

    const editStudent = (id) => {
        Axios.put("http://localhost:3001/Editcompany", {
          Full_name: name,
          SchoolCampus: SchoolCampus,
          Roll_no: id,
        }).then((response) => {
          console.log(response);
        });
      };

    return (
        <div>
            <input type="text" onChange={(e) => {setName(e.target.value)}}/>
            <input type="text" onChange={(e) => {setCampus(e.target.value)}}/>
            <button onClick={() => {editStudent(id)}}>Save</button>
        </div>
    )
}

export default EditCompany
