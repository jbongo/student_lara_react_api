import axios from "axios";
import React, {useEffect, useState,} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "./layouts/Nav";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const studentData = [{
    nom : '',
    email : '',
    cours : '',
    telephone : '',
}]



const EditStudent  =  () => {

    
    const [student, setStudent] = useState(studentData);
    
    let student_id  = useParams().id;
    let navigate = useNavigate();

      
      
    var params = useParams();
    
     useEffect(  () => {
        
            axios.get(API_BASE_URL+"/api/student/"+params.id)
            .then( (res) => {
                setStudent(res.data.student)
            
            }) ;   
     },[]);

     function handleInput(e) {

        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }
     
    

    
     function  updateStudent(e, student_id){

        e.preventDefault();
        console.log(student_id);
        axios.put(`${API_BASE_URL}/api/update-student/`+student_id, student).
        
            then( (res) => {
            
                if(res.data.status === 200){
                    navigate('/')
                }
            });
        
        
        
      
    
    }

     
     
     
   return(
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <Nav/>
                        
                        <div className="card-body">
                            
                        <form onSubmit={ (e) => updateStudent(e, student_id)}>
                            <div className=" form-group mb-3"> 
                                <label htmlFor="exampleInputEmail1" className="form-label">Nom {student_id} ddd</label>
                                <input type="text" name="nom" onChange={handleInput} value={student.nom ?? ""} className="form-control" />
                                
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" name="email" onChange={handleInput} value={student.email ?? ""}  className="form-control" />
                                
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Cours</label>
                                <input type="text" name="cours" onChange={handleInput} value={student.cours ?? ""}  className="form-control" />
                                
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Téléphone</label>
                                <input type="text" name="telephone" onChange={handleInput} value={student.telephone ?? ""}  className="form-control" />
                                
                            </div>
                              
                              <button type="submit" className="btn btn-primary">Enregistrer</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}





export default EditStudent;