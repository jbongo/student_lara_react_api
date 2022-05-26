import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./layouts/Nav";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class AddStudent extends React.Component{


    constructor(props){
    
        super(props);
        this.state = {
            nom:"",
            email:"",
            cours:"",
            telephone:"",
            error_list: []
        }
        
        this.handleInput = this.handleInput.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    
    }
    
    handleInput(e) {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
        
    }
    
   async saveStudent(e){
        
        e.preventDefault();
        
        const res = await axios.post(`${API_BASE_URL}/api/add-student`, this.state);
        
        console.log(res);
        if(res.data.status === 200){
            this.setState ({
                nom:"",
                email:"",
                cours:"",
                telephone:"",
            });
        }else{
        
            this.setState({
                error_list : res.data.validate_err
            })
        }
        
    
    
    }
    
    
    render(){
    
    console.log();
        return(
        
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <Nav/>
                            
                            <div className="card-body">
                                
                            <form onSubmit={this.saveStudent}>
                                <div className=" form-group mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                                    <input type="text" name="nom" onChange={this.handleInput} value={this.state.nom} className="form-control" />
                                    <span className="text-danger"> {this.state.error_list.nom}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name="email" onChange={this.handleInput} value={this.state.email}  className="form-control" />
                                    <span className="text-danger"> {this.state.error_list.email}</span>
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Cours</label>
                                    <input type="text" name="cours" onChange={this.handleInput} value={this.state.cours}  className="form-control" />
                                    <span className="text-danger"> {this.state.error_list.cours}</span>
                                    
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Téléphone</label>
                                    <input type="text" name="telephone" onChange={this.handleInput} value={this.state.telephone}  className="form-control" />
                                    <span className="text-danger"> {this.state.error_list.telephone}</span>
                                    
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

}