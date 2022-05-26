import axios from "axios";
import React, {useEffect, useState,} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../layouts/Nav";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const studentData = [{
    email : '',
    password : '',
 
}]



const Login  =  () => {

    
    const [student, setStudent] = useState(studentData);
    
    let navigate = useNavigate();

    
    function handleInput(e){
    
    const {name, value} = e.target;
        setStudent({...student, [name]: value});
        
    }
    
    function log(e){
        e.preventDefault();
        
        
    }
     
   return(
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <Nav/>
                        
                        <div className="card-body" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        
                        
                        <form onSubmit={ (e) => log(e)}>
                        
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





export default Login;