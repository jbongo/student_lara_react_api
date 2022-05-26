import axios from "axios";
import React, {useEffect, useState,} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../layouts/Nav";
// import registerService from "../../services/auth/registerService";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const studentData = [{
    email : '',
    password : '',
    nom : '',
 
}]



const Register  =  () => {

    
    const [student, setStudent] = useState(studentData);
    
    let navigate = useNavigate();

    
    function handleInput(e){
    
    const {name, value} = e.target;
        setStudent({...student, [name]: value});
        
    }
    
    function saveUser(event) {

        console.log("xxxxxxxxxxxxx");
        event.preventDefault();
        axios.post(`${API_BASE_URL}/api/register`, student).then((res) => {

            if (res.data.validate_err) {
                console.log(res.data.validate_err);
            }
            if (res.data.status == 200) {
                console.log(res.data.message);
            }
        })

    }
 
     
   return(
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <Nav/>
                        
                        <div className="card-body" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        
                        
                        <form onSubmit={ (event) => saveUser(event)}>
                            
                            <div className=" form-group mb-3"> 
                                <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                                <input type="text" name="nom" onChange={handleInput} value={student.nom ?? ""} className="form-control" />
                                
                            </div>
                            
                            
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" name="email" onChange={handleInput} value={student.email ?? ""}  className="form-control" />
                                
                            </div>
                            <div className=" form-group mb-3"> 
                                <label htmlFor="exampleInputEmail1" className="form-label">Mot de passe</label>
                                <input type="password" name="password" onChange={handleInput} value={student.password ?? ""} className="form-control" />
                                
                            </div>
                            
                            
                              <button type="submit" className="btn btn-primary">Connexion</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}





export default Register;