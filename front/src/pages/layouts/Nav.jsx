import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component{


    render(){
        return(
        
            <div className="card-header">
                <h4>Liste des étudiants</h4>
                    
                    <Link to="/" className="btn btn-outline-primary"> Liste </Link>
                    <Link to="/login" className="btn btn-outline-primary float-end"> Connexion</Link>
                    <Link to="/register" className="btn btn-outline-primary float-end"> Inscription</Link>
                    <Link to="/add-student" className="btn btn-outline-primary float-end"> Ajouter Etudiant</Link>
                    
            </div>
                            
                           
        )
    }

}