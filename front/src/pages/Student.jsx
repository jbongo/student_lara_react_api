import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./layouts/Nav";
import Swal from 'sweetalert2';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class Student extends React.Component{
    
    constructor(props) {
        super(props);
        
         this.state = {
            students: [],
            loading: true
        }
    }
   
    
   async componentDidMount(){
        const res = await axios.get(API_BASE_URL+'/api/students');
        
        if(res.data.status === 200){
          
            
            this.setState({
                students: res.data.students,
                loading:false
            })
        }
    }

    
    
    deleteStudent(e, id) {
    
        e.preventDefault();
        const childTr = e.currentTarget;
        
        
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Vraiment supprimer ?',
            text: "Action irréversible!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'NON!',
            confirmButtonText: 'OUI',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            
                axios.delete(`${API_BASE_URL}/api/delete-student/${id}`). 
                then( (res) => {
                
                     if(res.data.status == 200){
                        childTr.closest('tr').remove();
                        swalWithBootstrapButtons.fire(
                            'Supprimé!',
                            'Etudiant supprimé.',
                            'success'
                          )
                    }else{
                    
                        swalWithBootstrapButtons.fire(
                            'Erreur!',
                            '',
                            'error'
                          )
                        return true;
                    }
                });
            
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Annulé',
                'Etudiant non supprimé :)',
                'error'
              )
            }
          })
        
        

    }
    


    render(){
    
        var students_table = '';
        
        if( this.state.loading === true){
            students_table = <tr><td rowSpan="7"> chargement ... </td></tr>;
        }else{
        
            students_table =  this.state.students.map( (student) => (
                                                <tr key={student.id}>
                                                    <th scope="row">{student.nom}</th>
                                                    <td>{student.email}</td>
                                                    <td>{student.telephone}</td>
                                                    <td>{student.cours}</td>
                                                    <td> <Link to={"/update-student/"+student.id} className="btn btn-sm btn-success "> Modifier</Link> </td>
                                                    <td> <button to={"/student/delete/"+student.id} className="btn btn-sm btn-danger " onClick={ (e) => this.deleteStudent(e, student.id)}> Supprimer</button> </td>
                                                    
                                              </tr>
                                            ))
        }
        
        
        return(
        
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <Nav/>
                            
                            <div className="card-body">
                                
                            <table className="table">
                                    <thead>
                                    <tr>
                                      <th scope="col">Nom</th>
                                      <th scope="col">Email</th>
                                      <th scope="col">Téléphone</th>
                                      <th scope="col">Cours</th>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                    </tr>
                                    </thead>
                                  <tbody className="table-group-divider">
                                  
                                  
                                        {students_table}
                                  
                                   
                                    
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}