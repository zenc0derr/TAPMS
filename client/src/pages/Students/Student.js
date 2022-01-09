import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Company.css";
import "./myfont.css";

const Student = () => {
  const [studentList, setStudentlist] = useState([]);

  const getStudent = () => {
    Axios.get("http://localhost:3001/student").then((res) => {
      console.log(res);
      setStudentlist(res.data);
    });
  };

  const deleteStudent = (id) => {
    Axios.delete(`http://localhost:3001/deleteStudent/${id}`).then(
      (response) => {
        setStudentlist(
          studentList.filter((val) => {
            return val.Roll_no !== id;
          })
        );
      }
    );
  };
  return (
    <div>
      <div className="add">
        <Link to="/addStudent">
          <button>Add</button>
        </Link>
      </div>
      <button onClick={getStudent}>Show Companies</button>
      {studentList.map((val, key) => {
        return (
          <div className="company-box">
            <div className="company-title">
              <h1>{val.Full_name}</h1>
            </div>
            <div className="company-link">
              {val.Roll_no} <br />
              {val.School_Campus}
              <br />
            </div>
            <div className="edit-button">
              <button>
                <Link to={`/editstudent/${val.Roll_no}`}>Edit</Link>
              </button>
              <button
                onClick={() => {
                  deleteStudent(val.Roll_no);
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

export default Student;
