<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cookie;


class UserController extends Controller
{
    //
    
    public function login(Request $request){
    
        $email = $request->email;

        if( !Auth::attempt($request->only('email','password') ) ) {

            return Response([
                "message" => "Email ou Mot de passe incorrecte"

            ], 401);

        }
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60*24) ;// 24h


       return Response([
            "message" => "Connexion réussie",
       ])->withCookie($cookie);
    
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


    public function user(){

        return Auth::user();
    }

    public function logout(){

        $cookie = Cookie::forget('jwt');

        return Response([
            "message" => "succès"
        ])->withCookie($cookie);
    }
}
