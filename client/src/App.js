import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCompany from "./pages/Company/AddCompany";
import Company from "./pages/Company/Company";
import EditCompany from "./pages/Company/EditCompany";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Student from "./pages/Students/Student";
import EditStudent from "./pages/Students/EditStudent";


window.auth = false;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/editcompany/:id" element={<EditCompany/>}/>
        <Route path="/addCompany" element={<AddCompany/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/editstudent/:id" element={<EditStudent/>}/>

      </Routes>
    </div>
  );
}

export default App;
