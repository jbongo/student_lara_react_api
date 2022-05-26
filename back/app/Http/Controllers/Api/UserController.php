<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    //
    
    public function login(Request $request){
    
    
    }
    
    
    public function register(Request $request){
    
        $validate = Validator::make($request->all(),[
            "nom" => "required",
            "email" => "required|email",
            "password" => "required"
        ]);
        
        
        if($validate->fails()){
        
            return  response()->json([
                "validate_err" => $validate->messages(),
            ]);
        }
    
        User::create([
            "name" => $request->nom,
            "email" => $request->email,
            "password" => Hash::make($request->password) ,
        ]);
        
        
        
        return  response()->json([
            "status" => 200,
            "message" => "Compte créé !"
        ]);
   
    }
}
